import React, { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Video,
  Globe,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowLeft,
  Calendar as CalendarIcon,
  ExternalLink,
} from "lucide-react";
import { fetchBookedSlots, scheduleMeeting } from "../../utils/contactApi";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const BASE_TIMEZONES = [
  "Asia/Kolkata",
  "America/Los_Angeles",
  "America/New_York",
  "Europe/London",
  "Asia/Dubai",
  "Asia/Singapore",
];

const TIME_SLOTS = [
  { label: "10:00 AM", minutes: 10 * 60 },
  { label: "10:30 AM", minutes: 10 * 60 + 30 },
  { label: "11:00 AM", minutes: 11 * 60 },
  { label: "11:30 AM", minutes: 11 * 60 + 30 },
  { label: "12:00 PM", minutes: 12 * 60 },
  { label: "12:30 PM", minutes: 12 * 60 + 30 },
  { label: "02:00 PM", minutes: 14 * 60 },
  { label: "02:30 PM", minutes: 14 * 60 + 30 },
  { label: "03:00 PM", minutes: 15 * 60 },
  { label: "03:30 PM", minutes: 15 * 60 + 30 },
  { label: "04:00 PM", minutes: 16 * 60 },
  { label: "04:30 PM", minutes: 16 * 60 + 30 },
  { label: "05:00 PM", minutes: 17 * 60 },
  { label: "05:30 PM", minutes: 17 * 60 + 30 },
  { label: "06:00 PM", minutes: 18 * 60 },
];

const getNowInTimezone = (tz) => {
  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date());

    const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    const year = Number(map.year);
    const month = Number(map.month) - 1;
    const day = Number(map.day);
    const hour = Number(map.hour) % 24;
    const minute = Number(map.minute);

    return {
      date: new Date(year, month, day),
      minutesNow: hour * 60 + minute,
    };
  } catch {
    const now = new Date();
    return {
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      minutesNow: now.getHours() * 60 + now.getMinutes(),
    };
  }
};

const ScheduleMeetingModal = ({ isOpen, onClose }) => {
  const detectedTz = useMemo(() => {
    try {
      const rawTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (!rawTz) return "Asia/Kolkata";
      return rawTz === "Asia/Calcutta" ? "Asia/Kolkata" : rawTz;
    } catch {
      return "Asia/Kolkata";
    }
  }, []);

  const timezoneOptions = useMemo(() => {
    return BASE_TIMEZONES.includes(detectedTz)
      ? BASE_TIMEZONES
      : [detectedTz, ...BASE_TIMEZONES];
  }, [detectedTz]);

  const [timezone, setTimezone] = useState(detectedTz);
  const tzNow = getNowInTimezone(timezone);
  const today = tzNow.date;

  const [viewDate, setViewDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [confirmedMeeting, setConfirmedMeeting] = useState(null);
  const [step, setStep] = useState("calendar"); // "calendar" | "details" | "confirmed"

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const formatDateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  useEffect(() => {
    if (!isOpen || !selectedDate) {
      setBookedSlots([]);
      return;
    }
    let cancelled = false;
    setLoadingSlots(true);
    fetchBookedSlots(formatDateKey(selectedDate))
      .then((slots) => {
        if (!cancelled) setBookedSlots(slots);
      })
      .catch(() => {
        if (!cancelled) setBookedSlots([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString("en-US", { month: "long" });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(new Date(year, month, d));
  }

  const isSameDay = (a, b) =>
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isPastDay = (date) => date < today;
  const isSunday = (date) => date.getDay() === 0;
  const todaySlots = TIME_SLOTS.filter((slot) => slot.minutes > tzNow.minutesNow);
  const isDayUnavailable = (date) =>
    isPastDay(date) ||
    isSunday(date) ||
    (isSameDay(date, today) && todaySlots.length === 0);

  const availableSlots = (
    selectedDate && isSameDay(selectedDate, today) ? todaySlots : TIME_SLOTS
  ).filter((slot) => !bookedSlots.includes(slot.label));

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (date) => {
    if (isDayUnavailable(date)) return;
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slotObj) => {
    const liveNow = getNowInTimezone(timezone);
    if (
      selectedDate &&
      isSameDay(selectedDate, liveNow.date) &&
      slotObj.minutes <= liveNow.minutesNow
    ) {
      setSelectedSlot(null);
      return;
    }
    setSelectedSlot(slotObj.label);
    setStep("details");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      if (errors.phone && digitsOnly.length === 10) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateDetails = () => {
    const nextErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    } else if (/\d/.test(form.fullName)) {
      nextErrors.fullName = "Name cannot contain numbers.";
    }

    const trimmedEmail = form.email.trim();
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (/^\d/.test(trimmedEmail)) {
      nextErrors.email = "Email cannot start with a number.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.phone.length !== 10) {
      nextErrors.phone = "Phone number must be 10 digits.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const handleConfirmMeeting = async (e) => {
    e.preventDefault();
    if (!validateDetails()) return;

    const liveNow = getNowInTimezone(timezone);
    const chosenSlotObj = TIME_SLOTS.find((s) => s.label === selectedSlot);
    if (
      !selectedDate ||
      selectedDate < liveNow.date ||
      (isSameDay(selectedDate, liveNow.date) &&
        (!chosenSlotObj || chosenSlotObj.minutes <= liveNow.minutesNow))
    ) {
      setStatus("error");
      setErrorMsg("Selected time slot has already passed. Please choose an upcoming time.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const data = await scheduleMeeting({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone,
        dateKey: formatDateKey(selectedDate),
        formattedDate: formattedSelectedDate,
        time: selectedSlot,
        timezone,
        notes: form.notes.trim(),
      });

      if (data.success) {
        setConfirmedMeeting(data.meeting || null);
        setStatus("idle");
        setStep("confirmed");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Could not schedule meeting. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message ||
          "Failed to connect to server. Please try again or contact us directly."
      );
    }
  };

  const resetAndClose = () => {
    setStep("calendar");
    setSelectedDate(null);
    setSelectedSlot(null);
    setBookedSlots([]);
    setConfirmedMeeting(null);
    setForm({ fullName: "", email: "", phone: "", notes: "" });
    setErrors({});
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-[780px] overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close scheduler"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
        >
          <X className="h-4 w-4" />
        </button>

        {step === "confirmed" ? (
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Meeting Scheduled!
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              A confirmation email with a calendar invite (.ics) and video link has
              been sent to <span className="font-medium text-slate-900">{form.email}</span>.
            </p>
            <div className="mt-6 w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm">
              <div className="flex items-center gap-2 font-medium text-slate-900">
                <CalendarIcon className="h-4 w-4 text-blue-600" />
                <span>{formattedSelectedDate}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-slate-600">
                <Clock className="h-4 w-4 text-slate-500" />
                <span>
                  {selectedSlot} (30m) &middot; {timezone}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-slate-600">
                <Video className="h-4 w-4 text-slate-500" />
                {confirmedMeeting?.meetingLink ? (
                  <a
                    href={confirmedMeeting.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
                  >
                    Join Video Call <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span>Video Call</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 rounded-lg bg-[#3b6fb5] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#315d99]"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Left Info Sidebar (Cal style) */}
            <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:w-[250px] md:shrink-0 md:border-b-0 md:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3b6fb5]">
                DQNeX Consultation
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">
                30 min meeting
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-slate-500" />
                  <span>30m</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="h-4 w-4 shrink-0 text-slate-500" />
                  <span>Cal Video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="h-4 w-4 shrink-0 text-slate-500" />
                  <select
                    value={timezone}
                    onChange={(e) => {
                      setTimezone(e.target.value);
                      setSelectedDate(null);
                      setSelectedSlot(null);
                    }}
                    aria-label="Select timezone"
                    className="w-full cursor-pointer rounded bg-transparent text-sm text-slate-700 outline-none focus:ring-1 focus:ring-[#3b6fb5]"
                  >
                    {timezoneOptions.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedDate && (
                <div className="mt-6 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">Selected</p>
                  <p className="mt-1">{formattedSelectedDate}</p>
                  {selectedSlot && <p className="mt-0.5 text-[#3b6fb5] font-medium">{selectedSlot}</p>}
                </div>
              )}
            </div>

            {/* Right Area */}
            <div className="flex-1 p-6">
              {step === "calendar" ? (
                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Calendar Grid */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center justify-between pr-6 sm:pr-0">
                      <h4 className="text-base font-semibold text-slate-900">
                        {monthName}{" "}
                        <span className="font-normal text-slate-500">{year}</span>
                      </h4>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          disabled={!canGoPrev}
                          aria-label="Previous month"
                          className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          aria-label="Next month"
                          className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 border-b border-slate-100 pb-2 text-center text-[11px] font-semibold tracking-wider text-slate-500">
                      {WEEKDAYS.map((day) => (
                        <div key={day}>{day}</div>
                      ))}
                    </div>

                    <div className="mt-2 grid grid-cols-7 gap-1.5 text-center">
                      {calendarCells.map((date, idx) => {
                        if (!date) {
                          return <div key={`empty-${idx}`} className="h-10" />;
                        }

                        const disabled = isDayUnavailable(date);
                        const selected = isSameDay(date, selectedDate);
                        const isToday = isSameDay(date, today);

                        return (
                          <button
                            key={date.toISOString()}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleDateClick(date)}
                            className={`relative flex h-10 w-full flex-col items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                              selected
                                ? "bg-slate-900 text-white"
                                : disabled
                                ? "cursor-not-allowed text-slate-300"
                                : "bg-slate-100/80 text-slate-800 hover:bg-slate-200"
                            }`}
                          >
                            <span>{date.getDate()}</span>
                            {isToday && (
                              <span
                                className={`mt-0.5 h-1 w-1 rounded-full ${
                                  selected ? "bg-white" : "bg-slate-900"
                                }`}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots Column */}
                  <div className="border-t border-slate-100 pt-4 sm:w-[175px] sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {selectedDate
                        ? selectedDate.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })
                        : "Select a date"}
                    </p>
                    {selectedDate ? (
                      loadingSlots ? (
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Checking availability...</span>
                        </div>
                      ) : availableSlots.length > 0 ? (
                        <div className="flex max-h-[260px] flex-col gap-2 overflow-y-auto pr-1">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot.label}
                              type="button"
                              onClick={() => handleSlotClick(slot)}
                              className="w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                            >
                              {slot.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs leading-relaxed text-slate-400">
                          No remaining slots for this date. Please select another date.
                        </p>
                      )
                    ) : (
                      <p className="text-xs leading-relaxed text-slate-400">
                        Pick an available date on the calendar to view 30m time slots.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleConfirmMeeting} className="space-y-3.5">
                  <button
                    type="button"
                    onClick={() => setStep("calendar")}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Change date / time
                  </button>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#3b6fb5]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="name@company.com"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#3b6fb5]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-700">
                        Phone Number (10 digits) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        inputMode="numeric"
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="9876543210"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#3b6fb5]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={handleFormChange}
                      placeholder="Share anything that will help prepare for our meeting..."
                      className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#3b6fb5]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        "Confirm Meeting"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMeetingModal;

import {
  Router
} from "./chunk-Z6AWMSNE.js";
import {
  addDays
} from "./chunk-MOPV73KR.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  constructFrom,
  format,
  millisecondsInHour,
  millisecondsInMinute,
  startOfDay,
  toDate,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FYJSCDUN.js";
import {
  ISODateFormatter,
  dateFormatter,
  metaData,
  timeSlots
} from "./chunk-4SRBZINW.js";
import {
  HttpClient,
  NgClass,
  httpResource
} from "./chunk-MWOOTSI3.js";
import {
  Component,
  Directive,
  HostListener,
  Injectable,
  Input,
  Optional,
  Pipe,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  linkedSignal,
  map,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2C4MEM5.js";

// node_modules/date-fns/isEqual.js
function isEqual(leftDate, rightDate) {
  return +toDate(leftDate) === +toDate(rightDate);
}

// node_modules/date-fns/parseISO.js
function parseISO(argument, options) {
  const invalidDate = () => constructFrom(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset, options?.in);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// src/app/commons/components/time-picker/time-picker.component.ts
var _c0 = (a0, a1) => ({ "cp": a0, "no-cursor": a1 });
var _c1 = (a0) => ({ "selected-border": a0 });
var _c2 = (a0, a1) => ({ "muted-text": a0, "available-text-label": a1 });
var _c3 = (a0, a1) => ({ "available-text": a0, "unavailable-text": a1 });
function TimePickerComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
    \u0275\u0275listener("click", function TimePickerComponent_For_3_Template_a_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(item_r2.isAvailable ? ctx_r2.selectSlot(item_r2) : "");
    })("mouseleave", function TimePickerComponent_For_3_Template_a_mouseleave_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.elementTouched());
    });
    \u0275\u0275elementStart(3, "div", 5)(4, "h6", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c0, item_r2.isAvailable, !item_r2.isAvailable));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, item_r2.isSelected));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c2, !item_r2.isAvailable, item_r2.isAvailable));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c3, item_r2.isAvailable, !item_r2.isAvailable));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.isAvailable ? "Available" : "Unavailable", " ");
  }
}
var TimePickerComponent = class _TimePickerComponent {
  slots = timeSlots;
  selectedDate = input.required(...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  bookedSlots = input.required(...ngDevMode ? [{ debugName: "bookedSlots" }] : []);
  availableSlots = linkedSignal(() => this.deriveAvailableSlots(this.bookedSlots()));
  selectedTimeEmitter = output();
  touchedEmitter = output();
  deriveAvailableSlots(bookedSlots) {
    console.log(bookedSlots);
    const updatedArray = this.slots.map((slot) => __spreadProps(__spreadValues({}, slot), {
      isAvailable: !bookedSlots.includes(String(slot.value)) && this.#checkIfTimeIsPast(slot)
    }));
    return updatedArray;
  }
  #checkIfTimeIsPast(slot) {
    const parsedSelectedDate = startOfDay(parseISO(this.selectedDate()));
    const todaysDate = startOfDay(/* @__PURE__ */ new Date());
    const hour = format(/* @__PURE__ */ new Date(), "HH");
    if (isEqual(todaysDate, parsedSelectedDate)) {
      return hour < slot.fullHours;
    } else {
      return true;
    }
  }
  selectSlot(item) {
    this.availableSlots.update((slots) => slots.map((slot) => __spreadProps(__spreadValues({}, slot), { isSelected: slot.value == item.value })));
    this.selectedTimeEmitter.emit(item.value);
  }
  elementTouched() {
    this.touchedEmitter.emit();
  }
  static \u0275fac = function TimePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimePickerComponent, selectors: [["app-time-picker"]], inputs: { selectedDate: [1, "selectedDate"], bookedSlots: [1, "bookedSlots"] }, outputs: { selectedTimeEmitter: "selectedTimeEmitter", touchedEmitter: "touchedEmitter" }, decls: 4, vars: 0, consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-6", "col-md-4", "col-lg-3", "mb-3", 3, "ngClass"], [1, "card", "text-center", "shadow-sm", "time-card", 3, "ngClass"], [1, "text-decoration-none", 3, "click", "mouseleave"], [1, "card-body", "pad-4"], [1, "card-title", "fw-bold", "mb-1", 3, "ngClass"], [1, "card-text", "small", "mb-0", 3, "ngClass"]], template: function TimePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, TimePickerComponent_For_3_Template, 8, 17, "div", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.availableSlots());
    }
  }, dependencies: [NgClass], styles: ["\n\n.pad-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.cp[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.no-cursor[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.available-text-label[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      green,\n      #4CAF50);\n  display: inline;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.available-text[_ngcontent-%COMP%] {\n  color: green;\n}\n.unavailable-text[_ngcontent-%COMP%] {\n  color: rgb(244, 122, 122);\n}\n.time-card[_ngcontent-%COMP%] {\n  transition: transform 0.9s;\n  background-color: rgba(0, 133, 242, 0.02);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.selected-border[_ngcontent-%COMP%] {\n  border: 2px solid green;\n}\n.muted-text[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: rgba(114, 122, 131, 0.75) !important;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\n/*# sourceMappingURL=time-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerComponent, [{
    type: Component,
    args: [{ selector: "app-time-picker", imports: [NgClass], template: `<div class="container mt-4">
    <div class="row">
        @for (item of availableSlots(); track $index) {
        <div class="col-6 col-md-4 col-lg-3 mb-3" [ngClass]="{ 'cp': item.isAvailable, 'no-cursor': !item.isAvailable}">
            <div class="card text-center shadow-sm time-card" [ngClass]="{ 'selected-border': item.isSelected}">
                <a (click)=" item.isAvailable ? selectSlot(item) : ''" class="text-decoration-none" (mouseleave)="elementTouched()">
                    <div class="card-body pad-4">
                        <h6 class="card-title fw-bold mb-1" [ngClass]="{'muted-text': !item.isAvailable, 'available-text-label': item.isAvailable}">
                            {{ item.label }}
                        </h6>
                        <p class="card-text small mb-0" [ngClass]="{
                    'available-text': item.isAvailable,
                    'unavailable-text': !item.isAvailable
                  }">
                            {{ item.isAvailable ? 'Available' : 'Unavailable' }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
        }
    </div>
</div>`, styles: ["/* src/app/commons/components/time-picker/time-picker.component.scss */\n.pad-4 {\n  padding: 4px;\n}\n.cp {\n  cursor: pointer;\n}\n.no-cursor {\n  cursor: not-allowed;\n}\n.available-text-label {\n  background-image:\n    linear-gradient(\n      to right,\n      green,\n      #4CAF50);\n  display: inline;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.available-text {\n  color: green;\n}\n.unavailable-text {\n  color: rgb(244, 122, 122);\n}\n.time-card {\n  transition: transform 0.9s;\n  background-color: rgba(0, 133, 242, 0.02);\n}\n.card:hover {\n  transform: scale(1.05);\n}\n.selected-border {\n  border: 2px solid green;\n}\n.muted-text {\n  --bs-text-opacity: 1;\n  color: rgba(114, 122, 131, 0.75) !important;\n}\nbutton {\n  border: none;\n  padding: 0;\n}\n/*# sourceMappingURL=time-picker.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimePickerComponent, { className: "TimePickerComponent", filePath: "src/app/commons/components/time-picker/time-picker.component.ts", lineNumber: 12 });
})();

// src/app/commons/data/reference-data.ts
var ServiceTypeList = [
  { key: "j", value: "Junk Removal" },
  { key: "m", value: "Moving" }
];

// src/app/commons/services/appointment-api.service.ts
var AppointmentApiService = class _AppointmentApiService {
  http = inject(HttpClient);
  selectedDate = signal(format(/* @__PURE__ */ new Date(), "MM/dd/yyyy"), ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  availableSlotsForSelectedDate = httpResource(
    () => ({
      url: `checkIfAppointIsAlreadySchedudForToday?date=${this.selectedDate()}`,
      method: "GET"
    }),
    //`checkIfAppointIsAlreadySchedudForToday?date=${this.selectedDate()}`
    {
      defaultValue: [],
      parse: (data) => data.data.map((time) => time.appointmentTime)
    }
  );
  scheduleAppointment(payload) {
    return this.http.post("schedule", payload);
  }
  static \u0275fac = function AppointmentApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppointmentApiService, factory: _AppointmentApiService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentApiService, [{
    type: Injectable
  }], null, null);
})();

// src/app/schedule-appointment/apartment-type/apartment-type.component.ts
function ApartmentTypeComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "input", 4);
    \u0275\u0275listener("change", function ApartmentTypeComponent_For_3_Template_input_change_1_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCheckboxChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", option_r2.value)("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function ApartmentTypeComponent_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "input", 15);
    \u0275\u0275elementStart(2, "label", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", option_r4.value)("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.label, " ");
  }
}
function ApartmentTypeComponent_Conditional_4_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function ApartmentTypeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3, "Elevator:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275repeaterCreate(5, ApartmentTypeComponent_Conditional_4_For_6_Template, 4, 4, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 10)(9, "select", 11)(10, "option", 12);
    \u0275\u0275text(11, "Select Floor Number");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, ApartmentTypeComponent_Conditional_4_For_13_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 14);
    \u0275\u0275text(15, "Select Floor Number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.aptValues);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.floorsList);
  }
}
var ApartmentTypeComponent = class _ApartmentTypeComponent {
  apartmentTypeForm;
  floorsList = [];
  constructor() {
    this.addFloorNumbers(20);
  }
  housingTypes = [
    { label: "Apartment", value: "APT" },
    { label: "Independent House", value: "IND" },
    { label: "Basement Suite", value: "SUITE" }
  ];
  aptValues = [
    { label: "Yes", value: true },
    { label: "No", value: false }
  ];
  onCheckboxChange(selectedOption) {
    if (selectedOption === "APT") {
      this.apartmentTypeForm.addControl("elevator", new FormControl());
      this.apartmentTypeForm.addControl("floorNumber", new FormControl());
    } else {
      this.apartmentTypeForm.removeControl("elevator");
      this.apartmentTypeForm.removeControl("floorNumber");
    }
  }
  addFloorNumbers(maxFloors) {
    for (let index = 0; index < maxFloors; index++) {
      this.floorsList.push(index + 1);
    }
  }
  static \u0275fac = function ApartmentTypeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApartmentTypeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApartmentTypeComponent, selectors: [["apartment-type"]], inputs: { apartmentTypeForm: "apartmentTypeForm" }, decls: 5, vars: 2, consts: [[1, "w-100", 3, "formGroup"], [1, "d-flex", "flex-column", "flex-md-row", "flex-wrap", "gap-3", "mb-3"], [1, "form-check"], [1, "row", "g-3"], ["type", "radio", "formControlName", "apartmentType", 1, "form-check-input", 3, "change", "id", "value"], [1, "form-check-label", "ms-1", 3, "for"], [1, "col-12", "col-md-6"], [1, "fw-bold", "d-block", "mb-2"], [1, "d-flex", "gap-3"], [1, "form-check", "form-check-inline"], [1, "form-floating"], ["id", "floorSelect", "formControlName", "floorNumber", "aria-label", "Select Floor Number", 1, "form-select"], ["disabled", "", "selected", ""], [3, "value"], ["for", "floorSelect", 1, "fw-bold"], ["type", "radio", "formControlName", "elevator", 1, "form-check-input", 3, "id", "value"]], template: function ApartmentTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, ApartmentTypeComponent_For_3_Template, 4, 4, "div", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ApartmentTypeComponent_Conditional_4_Template, 16, 0, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("formGroup", ctx.apartmentTypeForm);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.housingTypes);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_2_0 = ctx.apartmentTypeForm.get("apartmentType")) == null ? null : tmp_2_0.value) === "APT" ? 4 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=apartment-type.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApartmentTypeComponent, [{
    type: Component,
    args: [{ selector: "apartment-type", imports: [ReactiveFormsModule, FormsModule], template: `<!-- <form [formGroup]="apartmentTypeForm">
  <div class="d-flex flex-column flex-md-row gap-3">
    @for (option of housingTypes; track option) {
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        [id]="option.value" 
        [value]="option.value"
        (change)="onCheckboxChange(option.value)" 
        formControlName="apartmentType" 
      />
      <label class="form-check-label" [for]="option.value">
        {{ option.label }}
      </label>
    </div>
    }
  </div>

  @if (apartmentTypeForm.get('apartmentType').value === 'APT') {
    <div class="col-12 col-md-4 mb-3">
    <label class="fw-bold" for="note">Elevator:</label>
    @for (option of aptValues; track option) {
      <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        [id]="option.value" 
        [value]="option.value"
        formControlName="elevator"
      />
      <label class="form-check-label" [for]="option.value">
        {{ option.label }}
      </label>
    </div>
    }
    </div>
    <div class="col-12 col-md-4 mb-3">
      <div class="form-floating">
        <select class="form-select" id="floatingSelect" formControlName="floorNumber"
          aria-label="Select Floor Number select">
          <option selected>Select Floor Number</option>
          @for (item of floorsList; track item.key) {
          <option [value]="item">{{item}}</option>
          }
        </select>
        <label class="fw-bold" for="floatingSelect">Select Floor Number</label>
      </div>
    </div>
  }
</form> -->

<form [formGroup]="apartmentTypeForm" class="w-100">

  <!-- Apartment Type Options -->
  <div class="d-flex flex-column flex-md-row flex-wrap gap-3 mb-3">
    @for (option of housingTypes; track option) {
      <div class="form-check">
        <input 
          class="form-check-input" 
          type="radio" 
          [id]="option.value" 
          [value]="option.value"
          formControlName="apartmentType"
          (change)="onCheckboxChange(option.value)" 
        />
        <label class="form-check-label ms-1" [for]="option.value">
          {{ option.label }}
        </label>
      </div>
    }
  </div>

  <!-- Show Elevator and Floor Number ONLY if Apartment is selected -->
  @if (apartmentTypeForm.get('apartmentType')?.value === 'APT') {
    <div class="row g-3">
      <!-- Elevator Yes/No -->
      <div class="col-12 col-md-6">
        <label class="fw-bold d-block mb-2">Elevator:</label>
        <div class="d-flex gap-3">
          @for (option of aptValues; track option) {
            <div class="form-check form-check-inline">
              <input 
                class="form-check-input" 
                type="radio" 
                [id]="option.value" 
                [value]="option.value"
                formControlName="elevator"
              />
              <label class="form-check-label ms-1" [for]="option.value">
                {{ option.label }}
              </label>
            </div>
          }
        </div>
      </div>

      <!-- Floor Number Dropdown -->
      <div class="col-12 col-md-6">
        <div class="form-floating">
          <select 
            class="form-select" 
            id="floorSelect"
            formControlName="floorNumber"
            aria-label="Select Floor Number"
          >
            <option disabled selected>Select Floor Number</option>
            @for (item of floorsList; track item) {
              <option [value]="item">{{ item }}</option>
            }
          </select>
          <label for="floorSelect" class="fw-bold">Select Floor Number</label>
        </div>
      </div>
    </div>
  }
</form>`, styles: ["/* src/app/schedule-appointment/apartment-type/apartment-type.component.scss */\nlabel {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=apartment-type.component.css.map */\n"] }]
  }], () => [], { apartmentTypeForm: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApartmentTypeComponent, { className: "ApartmentTypeComponent", filePath: "src/app/schedule-appointment/apartment-type/apartment-type.component.ts", lineNumber: 10 });
})();

// src/app/schedule-appointment/appliances/appliances.component.ts
var _c02 = (a0) => ({ "invalid-label": a0 });
function AppliancesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var AppliancesComponent = class _AppliancesComponent {
  appliancesForm;
  static \u0275fac = function AppliancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppliancesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppliancesComponent, selectors: [["appliances"]], inputs: { appliancesForm: "appliancesForm" }, decls: 8, vars: 5, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "number", "id", "numberOfLargeAppliances", "formControlName", "numberOfLargeAppliances", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "numberOfLargeAppliances", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"]], template: function AppliancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "Number Of Furniture Pieces *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, AppliancesComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.appliancesForm);
      const numberOfLargeAppliancesControl_r1 = ctx.appliancesForm.get("numberOfLargeAppliances");
      const numberOfLargeAppliancesValidity_r2 = numberOfLargeAppliancesControl_r1.touched && numberOfLargeAppliancesControl_r1.invalid && numberOfLargeAppliancesControl_r1.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c02, numberOfLargeAppliancesValidity_r2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(numberOfLargeAppliancesValidity_r2 ? 7 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppliancesComponent, [{
    type: Component,
    args: [{ selector: "appliances", imports: [ReactiveFormsModule, NgClass], template: `<form [formGroup]="appliancesForm">
<div class="row">
    <div class="col-12 col-md-4 mb-3">
        @let numberOfLargeAppliancesControl = appliancesForm.get('numberOfLargeAppliances');
        @let numberOfLargeAppliancesValidity = numberOfLargeAppliancesControl.touched &&
        numberOfLargeAppliancesControl.invalid &&
        numberOfLargeAppliancesControl.hasError('required');

        <div class="form-floating">
            <input 
                type="number" 
                class="form-control apt-form-control" 
                id="numberOfLargeAppliances"
                formControlName="numberOfLargeAppliances" 
                placeholder="Last Name"
            >
            <label class="fw-bold" [ngClass]="{ 'invalid-label': numberOfLargeAppliancesValidity }"
                for="numberOfLargeAppliances">Number Of Furniture Pieces *</label>
        </div>

        @if (numberOfLargeAppliancesValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>

</div>
</form>` }]
  }], null, { appliancesForm: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppliancesComponent, { className: "AppliancesComponent", filePath: "src/app/schedule-appointment/appliances/appliances.component.ts", lineNumber: 11 });
})();

// src/app/schedule-appointment/boxes/boxes.component.ts
var _c03 = (a0) => ({ "invalid-label": a0 });
function BoxesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function BoxesComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "input", 10);
    \u0275\u0275listener("change", function BoxesComponent_For_13_Template_input_change_1_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCheckboxChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", option_r2.value)("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function BoxesComponent_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function BoxesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "textarea", 12);
    \u0275\u0275text(3, "                ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, BoxesComponent_Conditional_14_Conditional_4_Template, 2, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listOfLargeItemsControl_r4 = \u0275\u0275nextContext().boxesForm.get("fragileItemsDesc");
    const listOfLargeItemsValidity_r5 = listOfLargeItemsControl_r4.touched && listOfLargeItemsControl_r4.invalid && listOfLargeItemsControl_r4.hasError("required");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(listOfLargeItemsValidity_r5 ? 4 : -1);
  }
}
var BoxesComponent = class _BoxesComponent {
  boxesForm;
  aptValues = [
    { label: "Yes", value: true },
    { label: "No", value: false }
  ];
  onCheckboxChange(value) {
    console.log(value);
    if (value) {
      this.#addDescControl();
    } else {
      this.#removeDescControl();
    }
    console.log(this.boxesForm);
  }
  #addDescControl() {
    this.boxesForm.addControl("fragileItemsDesc", new FormControl(""));
  }
  #removeDescControl() {
    this.boxesForm.removeControl("fragileItemsDesc");
  }
  static \u0275fac = function BoxesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoxesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoxesComponent, selectors: [["boxes"]], inputs: { boxesForm: "boxesForm" }, decls: 15, vars: 6, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "number", "id", "noOfBoxes", "formControlName", "noOfBoxes", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "noOfBoxes", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"], [1, "fw-bold", "d-block", "mb-2"], [1, "d-flex", "gap-3"], [1, "form-check", "form-check-inline"], ["type", "radio", "formControlName", "containsFragileItems", 1, "form-check-input", 3, "change", "id", "value"], [1, "form-check-label", "ms-1", 3, "for"], ["id", "listOfLargeItems", "formControlName", "fragileItemsDesc", "placeholder", "Ex: Glassware, Ceramics, antiques etc...", "rows", "2", 1, "form-control"]], template: function BoxesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "Number Of Boxes *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, BoxesComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 7);
      \u0275\u0275text(10, "Any fragile items?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275repeaterCreate(12, BoxesComponent_For_13_Template, 4, 4, "div", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, BoxesComponent_Conditional_14_Template, 5, 1, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.boxesForm);
      const noOfBoxesControl_r6 = ctx.boxesForm.get("noOfBoxes");
      const noOfBoxesValidity_r7 = noOfBoxesControl_r6.touched && noOfBoxesControl_r6.invalid && noOfBoxesControl_r6.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c03, noOfBoxesValidity_r7));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(noOfBoxesValidity_r7 ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.aptValues);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.boxesForm.contains("fragileItemsDesc") ? 14 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxesComponent, [{
    type: Component,
    args: [{ selector: "boxes", imports: [ReactiveFormsModule, NgClass], template: `<form [formGroup]="boxesForm">
    <div class="row">
        <div class="col-12 col-md-4 mb-3">
            @let noOfBoxesControl = boxesForm.get('noOfBoxes');
            @let noOfBoxesValidity = noOfBoxesControl.touched &&
            noOfBoxesControl.invalid &&
            noOfBoxesControl.hasError('required');

            <div class="form-floating">
                <input 
                    type="number" 
                    class="form-control apt-form-control" 
                    id="noOfBoxes"
                    formControlName="noOfBoxes" 
                    placeholder="Last Name"
                >
                <label class="fw-bold" [ngClass]="{ 'invalid-label': noOfBoxesValidity }"
                    for="noOfBoxes">Number Of Boxes *</label>
            </div>

            @if (noOfBoxesValidity) {
            <div class="apt-validation">This is a required field</div>
            }
        </div>

        <div class="col-12 col-md-4 mb-3">
            <label class="fw-bold d-block mb-2">Any fragile items?</label>
            <div class="d-flex gap-3">
                @for (option of aptValues; track option) {
                <div class="form-check form-check-inline">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        [id]="option.value" 
                        [value]="option.value"
                        (change)="onCheckboxChange(option.value)" 
                        formControlName="containsFragileItems" />
                    <label class="form-check-label ms-1" [for]="option.value">
                        {{ option.label }}
                    </label>
                </div>
                }
            </div>
        </div>

        @if (boxesForm.contains('fragileItemsDesc')) {
        <div class="col-12 col-md-4 mb-3">
            @let listOfLargeItemsControl = boxesForm.get('fragileItemsDesc');
            @let listOfLargeItemsValidity = listOfLargeItemsControl.touched && listOfLargeItemsControl.invalid &&
            listOfLargeItemsControl.hasError('required');
            <div>
                <textarea
                    class="form-control" 
                    id="listOfLargeItems" 
                    formControlName="fragileItemsDesc"
                    placeholder="Ex: Glassware, Ceramics, antiques etc..." 
                    rows="2">
                </textarea>
            </div>
            @if (listOfLargeItemsValidity) {
            <div class="apt-validation">This is a required field</div>
            }
        </div>
        }
    </div>
</form>` }]
  }], null, { boxesForm: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoxesComponent, { className: "BoxesComponent", filePath: "src/app/schedule-appointment/boxes/boxes.component.ts", lineNumber: 11 });
})();

// src/app/telephone.pipe.ts
var TelephonePipe = class _TelephonePipe {
  transform(telephone) {
    if (!telephone || telephone === "0") {
      return "";
    }
    const value = telephone.toString().trim();
    if (/\D/.test(value)) {
      return value;
    }
    if (value.length === 10) {
      return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
    }
    return value;
  }
  static \u0275fac = function TelephonePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelephonePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "telephone", type: _TelephonePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelephonePipe, [{
    type: Pipe,
    args: [{
      name: "telephone"
    }]
  }], null, null);
})();

// src/app/phone-number-mask.directive.ts
var PhoneNumberMaskDirective = class _PhoneNumberMaskDirective {
  ngControl;
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  onModelChange(event) {
    if (this.ngControl) {
      this.onInputChange(event);
    }
  }
  onInputChange(event) {
    let newVal = event.replace(/\D/g, "");
    if (newVal.length > 3 && newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, "$1-$2");
    } else if (newVal.length > 6 && newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, "$1-$2-$3");
    }
    this.ngControl?.valueAccessor?.writeValue(newVal);
  }
  static \u0275fac = function PhoneNumberMaskDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneNumberMaskDirective)(\u0275\u0275directiveInject(NgControl, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PhoneNumberMaskDirective, selectors: [["", "appPhoneNumberMask", ""]], hostBindings: function PhoneNumberMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ngModelChange", function PhoneNumberMaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      });
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneNumberMaskDirective, [{
    type: Directive,
    args: [{
      selector: "[appPhoneNumberMask]",
      standalone: true
    }]
  }], () => [{ type: NgControl, decorators: [{
    type: Optional
  }] }], { onModelChange: [{
    type: HostListener,
    args: ["ngModelChange", ["$event"]]
  }] });
})();

// src/app/schedule-appointment/contact-info/contact-info.component.ts
var _c04 = (a0) => ({ "invalid-label": a0 });
function ContactInfoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ContactInfoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ContactInfoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ContactInfoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var ContactInfoComponent = class _ContactInfoComponent {
  contactInfoForm;
  onPhoneNumber() {
    this.contactInfoForm.get("phoneNumber").setValue(new TelephonePipe().transform(this.contactInfoForm.get("phoneNumber").value));
  }
  static \u0275fac = function ContactInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactInfoComponent, selectors: [["contact-info"]], inputs: { contactInfoForm: "contactInfoForm" }, decls: 26, vars: 17, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control", "apt-form-control"], ["for", "firstName", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "lastName", 1, "fw-bold", 3, "ngClass"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", "apt-form-control"], ["for", "email", 1, "fw-bold", 3, "ngClass"], ["type", "tel", "minlength", "12", "maxlength", "12", "appPhoneNumberMask", "", "id", "phone", "formControlName", "phoneNumber", "placeholder", "Phone", 1, "form-control", "apt-form-control", 3, "blur"], ["for", "phone", 1, "fw-bold", 3, "ngClass"]], template: function ContactInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "First Name *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ContactInfoComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "div", 3);
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275elementStart(11, "label", 8);
      \u0275\u0275text(12, "Last Name *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, ContactInfoComponent_Conditional_13_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 2)(15, "div", 3);
      \u0275\u0275element(16, "input", 9);
      \u0275\u0275elementStart(17, "label", 10);
      \u0275\u0275text(18, "Email address *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, ContactInfoComponent_Conditional_19_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 2)(21, "div", 3)(22, "input", 11);
      \u0275\u0275listener("blur", function ContactInfoComponent_Template_input_blur_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPhoneNumber());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "label", 12);
      \u0275\u0275text(24, "Phone *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, ContactInfoComponent_Conditional_25_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.contactInfoForm);
      const firstNameControl_r2 = ctx.contactInfoForm.get("firstName");
      const firstNameValidity_r3 = firstNameControl_r2.touched && firstNameControl_r2.invalid && firstNameControl_r2.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c04, firstNameValidity_r3));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(firstNameValidity_r3 ? 7 : -1);
      const lastNameControl_r4 = ctx.contactInfoForm.get("lastName");
      const lastNameValidity_r5 = lastNameControl_r4.touched && lastNameControl_r4.invalid && lastNameControl_r4.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c04, lastNameValidity_r5));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(lastNameValidity_r5 ? 13 : -1);
      const emailControl_r6 = ctx.contactInfoForm.get("email");
      const emailValidity_r7 = emailControl_r6.touched && emailControl_r6.invalid && emailControl_r6.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c04, emailValidity_r7));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(emailValidity_r7 ? 19 : -1);
      const phoneControl_r8 = ctx.contactInfoForm.get("phoneNumber");
      const phoneValidity_r9 = phoneControl_r8.touched && phoneControl_r8.invalid && phoneControl_r8.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c04, phoneValidity_r9));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(phoneValidity_r9 ? 25 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, NgClass, PhoneNumberMaskDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactInfoComponent, [{
    type: Component,
    args: [{ selector: "contact-info", imports: [ReactiveFormsModule, NgClass, PhoneNumberMaskDirective], template: `<form [formGroup]="contactInfoForm">
    <div class="row">

        <div class="col-12 col-md-4 mb-3">
            @let firstNameControl = contactInfoForm.get('firstName');
            @let firstNameValidity = firstNameControl.touched && firstNameControl.invalid &&
            firstNameControl.hasError('required');

            <div class="form-floating">
              <input type="text" class="form-control apt-form-control" id="firstName" formControlName="firstName"
                placeholder="First Name">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': firstNameValidity }" for="firstName" class="fw-bold">First Name *</label>
            </div>

            @if (firstNameValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
                  <!-- Last Name -->
          <div class="col-12 col-md-4 mb-3">
            @let lastNameControl = contactInfoForm.get('lastName');
            @let lastNameValidity = lastNameControl.touched && lastNameControl.invalid &&
            lastNameControl.hasError('required');

            <div class="form-floating">
              <input type="text" class="form-control apt-form-control" id="lastName" formControlName="lastName" placeholder="Last Name">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': lastNameValidity }" for="lastName">Last Name *</label>
            </div>

            @if (lastNameValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>

          <!-- Email -->
          <div class="col-12 col-md-4 mb-3">
            @let emailControl = contactInfoForm.get('email');
            @let emailValidity = emailControl.touched && emailControl.invalid && emailControl.hasError('required');

            <div class="form-floating">
              <input type="email" class="form-control apt-form-control" id="email" formControlName="email" placeholder="Email">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': emailValidity }" for="email">Email address *</label>
            </div>

            @if (emailValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>

          <!-- Phone Number -->
          <div class="col-12 col-md-4 mb-3">
            @let phoneControl = contactInfoForm.get('phoneNumber');
            @let phoneValidity = phoneControl.touched && phoneControl.invalid && phoneControl.hasError('required');

            <div class="form-floating">
              <input type="tel" class="form-control apt-form-control"
              (blur)="onPhoneNumber()"
               minlength="12" maxlength="12" appPhoneNumberMask id="phone" formControlName="phoneNumber" placeholder="Phone">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': phoneValidity }"  for="phone">Phone *</label>
            </div>

            @if (phoneValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
    </div>
</form>` }]
  }], null, { contactInfoForm: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactInfoComponent, { className: "ContactInfoComponent", filePath: "src/app/schedule-appointment/contact-info/contact-info.component.ts", lineNumber: 13 });
})();

// src/app/schedule-appointment/electronics/electronics.component.ts
var _c05 = (a0) => ({ "invalid-label": a0 });
function ElectronicsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ElectronicsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ElectronicsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var ElectronicsComponent = class _ElectronicsComponent {
  electronicsForm;
  static \u0275fac = function ElectronicsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElectronicsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ElectronicsComponent, selectors: [["electronics"]], inputs: { electronicsForm: "electronicsForm" }, decls: 19, vars: 10, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "number", "id", "numberOfTvs", "formControlName", "numberOfTvs", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "numberOfTvs", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"], ["type", "number", "id", "numberOfMonitorsAndComputers", "formControlName", "numberOfMonitorsAndComputers", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "numberOfMonitorsAndComputers", 1, "fw-bold", 3, "ngClass"], ["placeholder", "Ex: sound systems, printers etc", "id", "otherElectronics", "formControlName", "otherElectronics", "rows", "2", 1, "form-control"]], template: function ElectronicsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "Number Of Furniture Pieces *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ElectronicsComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "div", 3);
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275elementStart(11, "label", 8);
      \u0275\u0275text(12, "Number Of Monitors/Computers *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, ElectronicsComponent_Conditional_13_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 2)(15, "div")(16, "textarea", 9);
      \u0275\u0275text(17, "            ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, ElectronicsComponent_Conditional_18_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.electronicsForm);
      const numberOfTvsControl_r1 = ctx.electronicsForm.get("numberOfTvs");
      const numberOfTvsValidity_r2 = numberOfTvsControl_r1.touched && numberOfTvsControl_r1.invalid && numberOfTvsControl_r1.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c05, numberOfTvsValidity_r2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(numberOfTvsValidity_r2 ? 7 : -1);
      const numberOfMonitorsAndComputersControl_r3 = ctx.electronicsForm.get("numberOfMonitorsAndComputers");
      const numberOfMonitorsAndComputersValidity_r4 = numberOfMonitorsAndComputersControl_r3.touched && numberOfMonitorsAndComputersControl_r3.invalid && numberOfMonitorsAndComputersControl_r3.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c05, numberOfMonitorsAndComputersValidity_r4));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(numberOfMonitorsAndComputersValidity_r4 ? 13 : -1);
      const otherElectronicsControl_r5 = ctx.electronicsForm.get("otherElectronics");
      const otherElectronicsValidity_r6 = otherElectronicsControl_r5.touched && otherElectronicsControl_r5.invalid && otherElectronicsControl_r5.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(otherElectronicsValidity_r6 ? 18 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElectronicsComponent, [{
    type: Component,
    args: [{ selector: "electronics", imports: [ReactiveFormsModule, NgClass], template: `<form [formGroup]="electronicsForm">
<div class="row">
    <div class="col-12 col-md-4 mb-3">
        @let numberOfTvsControl = electronicsForm.get('numberOfTvs');
        @let numberOfTvsValidity = numberOfTvsControl.touched &&
        numberOfTvsControl.invalid &&
        numberOfTvsControl.hasError('required');

        <div class="form-floating">
            <input 
                type="number" 
                class="form-control apt-form-control" 
                id="numberOfTvs"
                formControlName="numberOfTvs" 
                placeholder="Last Name"
            >
            <label class="fw-bold" [ngClass]="{ 'invalid-label': numberOfTvsValidity }"
                for="numberOfTvs">Number Of Furniture Pieces *</label>
        </div>

        @if (numberOfTvsValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>

        <div class="col-12 col-md-4 mb-3">
        @let numberOfMonitorsAndComputersControl = electronicsForm.get('numberOfMonitorsAndComputers');
        @let numberOfMonitorsAndComputersValidity = numberOfMonitorsAndComputersControl.touched &&
        numberOfMonitorsAndComputersControl.invalid &&
        numberOfMonitorsAndComputersControl.hasError('required');

        <div class="form-floating">
            <input 
                type="number" 
                class="form-control apt-form-control" 
                id="numberOfMonitorsAndComputers"
                formControlName="numberOfMonitorsAndComputers" 
                placeholder="Last Name"
            >
            <label class="fw-bold" [ngClass]="{ 'invalid-label': numberOfMonitorsAndComputersValidity }"
                for="numberOfMonitorsAndComputers">Number Of Monitors/Computers *</label>
        </div>

        @if (numberOfMonitorsAndComputersValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>

    <div class="col-12 col-md-4 mb-3">
        @let otherElectronicsControl = electronicsForm.get('otherElectronics');
        @let otherElectronicsValidity = otherElectronicsControl.touched && otherElectronicsControl.invalid &&
        otherElectronicsControl.hasError('required');
        <div>
            <textarea
                class="form-control" 
                placeholder="Ex: sound systems, printers etc"
                id="otherElectronics" 
                formControlName="otherElectronics" 
                rows="2">
            </textarea>
            <!-- <label class="fw-bold" [ngClass]="{'invalid-label': otherElectronicsValidity}" for="otherElectronics">Other Electronics
                *</label> -->
        </div>
        @if (otherElectronicsValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>
</div>
</form>` }]
  }], null, { electronicsForm: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ElectronicsComponent, { className: "ElectronicsComponent", filePath: "src/app/schedule-appointment/electronics/electronics.component.ts", lineNumber: 11 });
})();

// src/app/schedule-appointment/furniture/furniture.component.ts
var _c06 = (a0) => ({ "invalid-label": a0 });
function FurnitureComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function FurnitureComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var FurnitureComponent = class _FurnitureComponent {
  furnitureForm;
  static \u0275fac = function FurnitureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FurnitureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FurnitureComponent, selectors: [["furniture"]], inputs: { furnitureForm: "furnitureForm" }, decls: 13, vars: 6, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "number", "id", "numberOfFurniturePieces", "formControlName", "numberOfFurniturePieces", "placeholder", "Last Name", 1, "form-control", "apt-form-control"], ["for", "numberOfFurniturePieces", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"], ["id", "listOfLargeItems", "formControlName", "listOfLargeItems", "placeholder", "Ex: Bed, Couch, Wardrobe etc", "rows", "2", 1, "form-control"]], template: function FurnitureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "Number Of Furniture Pieces *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, FurnitureComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "div")(10, "textarea", 7);
      \u0275\u0275text(11, "            ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, FurnitureComponent_Conditional_12_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.furnitureForm);
      const numberOfFurniturePiecesControl_r1 = ctx.furnitureForm.get("numberOfFurniturePieces");
      const numberOfFurniturePiecesValidity_r2 = numberOfFurniturePiecesControl_r1.touched && numberOfFurniturePiecesControl_r1.invalid && numberOfFurniturePiecesControl_r1.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c06, numberOfFurniturePiecesValidity_r2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(numberOfFurniturePiecesValidity_r2 ? 7 : -1);
      const listOfLargeItemsControl_r3 = ctx.furnitureForm.get("listOfLargeItems");
      const listOfLargeItemsValidity_r4 = listOfLargeItemsControl_r3.touched && listOfLargeItemsControl_r3.invalid && listOfLargeItemsControl_r3.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(listOfLargeItemsValidity_r4 ? 12 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FurnitureComponent, [{
    type: Component,
    args: [{ selector: "furniture", imports: [ReactiveFormsModule, FormsModule, NgClass], template: `<form [formGroup]="furnitureForm">
<div class="row">
    <div class="col-12 col-md-4 mb-3">
        @let numberOfFurniturePiecesControl = furnitureForm.get('numberOfFurniturePieces');
        @let numberOfFurniturePiecesValidity = numberOfFurniturePiecesControl.touched &&
        numberOfFurniturePiecesControl.invalid &&
        numberOfFurniturePiecesControl.hasError('required');

        <div class="form-floating">
            <input 
                type="number" 
                class="form-control apt-form-control" 
                id="numberOfFurniturePieces"
                formControlName="numberOfFurniturePieces" 
                placeholder="Last Name"
            >
            <label class="fw-bold" [ngClass]="{ 'invalid-label': numberOfFurniturePiecesValidity }"
                for="numberOfFurniturePieces">Number Of Furniture Pieces *</label>
        </div>

        @if (numberOfFurniturePiecesValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>

    <div class="col-12 col-md-4 mb-3">
        @let listOfLargeItemsControl = furnitureForm.get('listOfLargeItems');
        @let listOfLargeItemsValidity = listOfLargeItemsControl.touched && listOfLargeItemsControl.invalid &&
        listOfLargeItemsControl.hasError('required');
        <div>
            <textarea
                class="form-control" 
                id="listOfLargeItems" 
                formControlName="listOfLargeItems" 
                placeholder="Ex: Bed, Couch, Wardrobe etc"
                rows="2">
            </textarea>
            <!-- <label class="fw-bold" [ngClass]="{'invalid-label': listOfLargeItemsValidity}" for="listOfLargeItems">List Of Large Items
                *</label> -->
        </div>
        @if (listOfLargeItemsValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>
</div>
</form>` }]
  }], null, { furnitureForm: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FurnitureComponent, { className: "FurnitureComponent", filePath: "src/app/schedule-appointment/furniture/furniture.component.ts", lineNumber: 11 });
})();

// src/app/schedule-appointment/packing/packing.component.ts
function PackingComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "input", 3);
    \u0275\u0275elementStart(2, "label", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", option_r1.value)("value", option_r1.value)("formControl", ctx_r1.packingHelp);
    \u0275\u0275advance();
    \u0275\u0275property("for", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.label, " ");
  }
}
var PackingComponent = class _PackingComponent {
  packingHelp;
  aptValues = [
    { label: "Yes", value: true },
    { label: "No", value: false }
  ];
  static \u0275fac = function PackingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingComponent, selectors: [["packing"]], inputs: { packingHelp: "packingHelp" }, decls: 5, vars: 0, consts: [[1, "fw-bold", "d-block", "mb-2"], [1, "d-flex", "gap-3"], [1, "form-check", "form-check-inline"], ["type", "radio", 1, "form-check-input", 3, "id", "value", "formControl"], [1, "form-check-label", "ms-1", 3, "for"]], template: function PackingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label", 0);
      \u0275\u0275text(1, "Do you need help with packing?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275repeaterCreate(3, PackingComponent_For_4_Template, 4, 5, "div", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.aptValues);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingComponent, [{
    type: Component,
    args: [{
      selector: "packing",
      imports: [ReactiveFormsModule],
      template: `
  <label class="fw-bold d-block mb-2">Do you need help with packing?</label>
  <div class="d-flex gap-3">
    @for (option of aptValues; track option) {
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        [id]="option.value" 
        [value]="option.value"
        [formControl]="packingHelp" />
      <label class="form-check-label ms-1" [for]="option.value">
        {{ option.label }}
      </label>
    </div>
    }
  </div>`
    }]
  }], null, { packingHelp: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingComponent, { className: "PackingComponent", filePath: "src/app/schedule-appointment/packing/packing.component.ts", lineNumber: 25 });
})();

// src/app/schedule-appointment/special-items/special-items.component.ts
var _c07 = (a0) => ({ "invalid-label": a0 });
function SpecialItemsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var SpecialItemsComponent = class _SpecialItemsComponent {
  specialItemsForm;
  static \u0275fac = function SpecialItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecialItemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialItemsComponent, selectors: [["special-items"]], inputs: { specialItemsForm: "specialItemsForm" }, decls: 8, vars: 5, consts: [[3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["type", "number", "id", "largeOrHeavyItems", "formControlName", "largeOrHeavyItems", "placeholder", "ldsjfn kjdnf kjdnf kjwnf", 1, "form-control", "apt-form-control"], ["for", "largeOrHeavyItems", 1, "fw-bold", 3, "ngClass"], [1, "apt-validation"]], template: function SpecialItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "input", 4);
      \u0275\u0275elementStart(5, "label", 5);
      \u0275\u0275text(6, "Large or Heavy Items *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, SpecialItemsComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.specialItemsForm);
      const largeOrHeavyItemsControl_r1 = ctx.specialItemsForm.get("largeOrHeavyItems");
      const largeOrHeavyItemsValidity_r2 = largeOrHeavyItemsControl_r1.touched && largeOrHeavyItemsControl_r1.invalid && largeOrHeavyItemsControl_r1.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c07, largeOrHeavyItemsValidity_r2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(largeOrHeavyItemsValidity_r2 ? 7 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecialItemsComponent, [{
    type: Component,
    args: [{ selector: "special-items", imports: [ReactiveFormsModule, NgClass], template: `<form [formGroup]="specialItemsForm">
<div class="row">
    <div class="col-12 col-md-4 mb-3">
        @let largeOrHeavyItemsControl = specialItemsForm.get('largeOrHeavyItems');
        @let largeOrHeavyItemsValidity = largeOrHeavyItemsControl.touched &&
        largeOrHeavyItemsControl.invalid &&
        largeOrHeavyItemsControl.hasError('required');

        <div class="form-floating">
            <input 
                type="number" 
                class="form-control apt-form-control" 
                id="largeOrHeavyItems"
                formControlName="largeOrHeavyItems" 
                placeholder="ldsjfn kjdnf kjdnf kjwnf"
            >
            <label class="fw-bold" [ngClass]="{ 'invalid-label': largeOrHeavyItemsValidity }"
                for="largeOrHeavyItems">Large or Heavy Items *</label>
        </div>

        @if (largeOrHeavyItemsValidity) {
        <div class="apt-validation">This is a required field</div>
        }
    </div>

</div>
</form>` }]
  }], null, { specialItemsForm: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialItemsComponent, { className: "SpecialItemsComponent", filePath: "src/app/schedule-appointment/special-items/special-items.component.ts", lineNumber: 10 });
})();

// src/app/schedule-appointment/schedule-appointment.component.ts
var _c08 = (a0) => ({ "invalid-label": a0 });
var _c12 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.key;
function ScheduleAppointmentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function ScheduleAppointmentComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAlert());
    });
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.scheduleAppointmentError());
  }
}
function ScheduleAppointmentComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.value);
  }
}
function ScheduleAppointmentComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "packing", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("packingHelp", ctx_r2.appointmentForm.get("packingHelp"));
  }
}
function ScheduleAppointmentComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 32)(2, "label", 33);
    \u0275\u0275text(3, "Moving From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "apartment-type", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("apartmentTypeForm", ctx_r2.appointmentForm.get("movingFrom"));
  }
}
function ScheduleAppointmentComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 32)(2, "label", 33);
    \u0275\u0275text(3, "Moving To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "apartment-type", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("apartmentTypeForm", ctx_r2.appointmentForm.get("movingTo"));
  }
}
function ScheduleAppointmentComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "input", 35);
    \u0275\u0275elementStart(3, "label", 36);
    \u0275\u0275text(4, "New Address *");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ScheduleAppointmentComponent_Conditional_27_Conditional_5_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const newAddressControl_r5 = \u0275\u0275nextContext().appointmentForm.get("newAddress");
    const newAddressValidity_r6 = newAddressControl_r5.touched && newAddressControl_r5.invalid && newAddressControl_r5.hasError("required");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c08, newAddressValidity_r6));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(newAddressValidity_r6 ? 5 : -1);
  }
}
function ScheduleAppointmentComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Contact Info:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "contact-info", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("contactInfoForm", ctx_r2.appointmentForm.get("contactInfo"));
  }
}
function ScheduleAppointmentComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Furniture:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "furniture", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("furnitureForm", ctx_r2.appointmentForm.get("furniture"));
  }
}
function ScheduleAppointmentComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Appliances:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "appliances", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("appliancesForm", ctx_r2.appointmentForm.get("appliances"));
  }
}
function ScheduleAppointmentComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Electronics:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "electronics", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("electronicsForm", ctx_r2.appointmentForm.get("electronics"));
  }
}
function ScheduleAppointmentComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Boxes:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "boxes", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("boxesForm", ctx_r2.appointmentForm.get("boxes"));
  }
}
function ScheduleAppointmentComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 33);
    \u0275\u0275text(2, "Special Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "special-items", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("specialItemsForm", ctx_r2.appointmentForm.get("specialItems"));
  }
}
function ScheduleAppointmentComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementEnd();
  }
}
function ScheduleAppointmentComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ScheduleAppointmentComponent_Conditional_51_For_2_Template, 2, 0, "div", 43, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c12));
  }
}
function ScheduleAppointmentComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-time-picker", 45);
    \u0275\u0275listener("selectedTimeEmitter", function ScheduleAppointmentComponent_Conditional_52_Template_app_time_picker_selectedTimeEmitter_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedTime($event));
    })("touchedEmitter", function ScheduleAppointmentComponent_Conditional_52_Template_app_time_picker_touchedEmitter_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.touchedEvent());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("selectedDate", ctx_r2.appointmentForm.get("appointment").get("date").value)("bookedSlots", ctx_r2.engagedSlotsList());
  }
}
var ScheduleAppointmentComponent = class _ScheduleAppointmentComponent {
  appointmentApiService = inject(AppointmentApiService);
  #router = inject(Router);
  appConstants = metaData;
  type = input.required();
  engagedSlotsList = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.value(), ...ngDevMode ? [{ debugName: "engagedSlotsList" }] : []);
  engagedSlotsListIsLoading = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.isLoading(), ...ngDevMode ? [{ debugName: "engagedSlotsListIsLoading" }] : []);
  appointmentForm;
  minDate = format(addDays(/* @__PURE__ */ new Date(), 0), ISODateFormatter);
  scheduleApointmentApiProgress = signal(false, ...ngDevMode ? [{ debugName: "scheduleApointmentApiProgress" }] : []);
  scheduleAppointmentError = signal("", ...ngDevMode ? [{ debugName: "scheduleAppointmentError" }] : []);
  unsubscribe = new Subject();
  servicesList = ServiceTypeList;
  derivedServicesList = computed(() => this.deriveList(this.type()), ...ngDevMode ? [{ debugName: "derivedServicesList" }] : []);
  removeControls = [
    "specialItems",
    "boxes",
    "electronics",
    "appliances",
    "furniture",
    "movingFrom",
    "movingTo",
    "newAddress",
    "packingHelp"
  ];
  deriveList(type) {
    return ServiceTypeList.filter((serviceType) => serviceType.key === type);
  }
  ngOnInit() {
    this.#createForm();
    this.appointmentForm.get("appointment.date").valueChanges.pipe(map((v) => this.#dateFormatter(v)), takeUntil(this.unsubscribe)).subscribe((v) => {
      this.appointmentApiService.selectedDate.set(v);
    });
  }
  onServiceTypeChange(event) {
    const serviceType = event.target["value"];
    this.#addControlsBasedOnServiceType(serviceType);
  }
  #dateFormatter(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    const formattedDate = format(localDate, dateFormatter);
    return formattedDate;
  }
  #createForm() {
    this.appointmentForm = new FormGroup({
      contactInfo: this.#contactInfoForm(),
      serviceType: new FormControl(this.type(), { nonNullable: true, validators: [Validators.required] }),
      note: new FormControl("", { nonNullable: true }),
      appointment: this.#appointForm(),
      currentAddress: new FormControl("", { nonNullable: true, validators: [Validators.required] })
      // newAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
    this.#addControlsBasedOnServiceType(this.type());
  }
  #setFurniture() {
    return new FormGroup({
      numberOfFurniturePieces: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      // number 
      listOfLargeItems: new FormControl("", { nonNullable: true })
    });
  }
  #setAppliances() {
    return new FormGroup({
      numberOfLargeAppliances: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  #setElectronicsControls() {
    return new FormGroup({
      numberOfTvs: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      //number
      numberOfMonitorsAndComputers: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      // number
      otherElectronics: new FormControl("", { nonNullable: true })
    });
  }
  #addControlsBasedOnServiceType(type) {
    if (type === "m") {
      this.#addMovingControls();
    } else {
      this.#removeControls();
    }
  }
  #removeControls() {
    this.removeControls.forEach((controlName) => this.appointmentForm.removeControl(controlName));
  }
  #addMovingControls() {
    this.appointmentForm.addControl("specialItems", this.#setSpecialItems());
    this.appointmentForm.addControl("boxes", this.#setBoxes());
    this.appointmentForm.addControl("electronics", this.#setElectronicsControls());
    this.appointmentForm.addControl("appliances", this.#setAppliances());
    this.appointmentForm.addControl("furniture", this.#setFurniture());
    this.appointmentForm.addControl("movingFrom", this.#movingForm());
    this.appointmentForm.addControl("movingTo", this.#movingForm());
    this.appointmentForm.addControl("newAddress", new FormControl("", { nonNullable: true, validators: [Validators.required] }));
    this.appointmentForm.addControl("packingHelp", new FormControl(true, { nonNullable: true, validators: [Validators.required] }));
  }
  #setBoxes() {
    return new FormGroup({
      noOfBoxes: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      containsFragileItems: new FormControl(null, { nonNullable: true, validators: [Validators.required] })
    });
  }
  #setSpecialItems() {
    return new FormGroup({
      largeOrHeavyItems: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  #contactInfoForm() {
    return new FormGroup({
      firstName: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      lastName: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      phoneNumber: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  #addressForm() {
    return new FormGroup({
      line1: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      line2: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      state: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      city: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      zip: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  #movingForm() {
    return new FormGroup({
      apartmentType: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  #appointForm() {
    return new FormGroup({
      date: new FormControl(format(/* @__PURE__ */ new Date(), ISODateFormatter), { nonNullable: true, validators: [Validators.required] }),
      time: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    });
  }
  selectedTime(event) {
    this.appointmentForm.get("appointment.time").setValue(event);
  }
  scheduleAppointment() {
    this.scheduleAppointmentError.set("");
    console.log(this.appointmentForm.getRawValue());
    console.log(this.appointmentForm);
    if (this.appointmentForm.valid) {
      this.scheduleApointmentApiProgress.set(true);
      const payload = __spreadValues(__spreadValues({}, this.appointmentForm.getRawValue()), this.appointmentForm.getRawValue().contactInfo);
      payload.appointment.date = this.#dateFormatter(payload.appointment.date);
      payload.email = payload.email.toLocaleLowerCase();
      delete payload["contactInfo"];
      this.appointmentApiService.scheduleAppointment(payload).subscribe({
        next: (response) => this.#afterSchedulingApointment(response),
        error: (error) => this.#handleError(error)
      });
    } else {
      this.appointmentForm.markAllAsTouched();
    }
  }
  #handleError(error) {
    this.scheduleApointmentApiProgress.set(false);
    if (error?.status == 409) {
      this.scheduleAppointmentError.set(error?.error?.message);
    } else {
      this.scheduleAppointmentError.set("Failed to create Appointment for Technical Reasons. Please try later.");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  #afterSchedulingApointment(_) {
    this.appointmentApiService.availableSlotsForSelectedDate.reload();
    this.appointmentForm.reset();
    this.scheduleApointmentApiProgress.set(false);
    this.#router.navigate(["confirm"]);
  }
  touchedEvent() {
    if (!this.appointmentForm.get("appointment.time").touched) {
      this.appointmentForm.get("appointment.time").markAsTouched({ emitEvent: true });
    }
  }
  preventTyping(event) {
    event.preventDefault();
  }
  closeAlert() {
    this.scheduleAppointmentError.set("");
  }
  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
  static \u0275fac = function ScheduleAppointmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleAppointmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleAppointmentComponent, selectors: [["schedule-appointment"]], inputs: { type: [1, "type"] }, features: [\u0275\u0275ProvidersFeature([AppointmentApiService])], decls: 58, vars: 32, consts: [[1, "info_container"], [1, ""], [1, "test-clip"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "container", "mt-4"], [3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "mb-3"], [1, "form-floating"], ["id", "floatingSelect", "formControlName", "serviceType", "aria-label", "Floating label select example", 1, "form-select", 3, "change"], [3, "value"], ["for", "floatingSelect", 1, "fw-bold"], [1, "apt-validation"], [1, "col-12", "col-md-6", "mb-3"], ["type", "text", "id", "currentAddress", "formControlName", "currentAddress", "placeholder", "First Name", 1, "form-control", "apt-form-control"], ["for", "currentAddress", 1, "fw-bold", 3, "ngClass"], ["id", "note", "formControlName", "note", "rows", "1", 1, "form-control"], ["for", "note", 1, "fw-bold", 3, "ngClass"], [1, "border", "rounded", "p-3", "h-100", "bg-white", "shadow-sm", "mb-3"], ["formGroupName", "appointment"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-control", "apt-form-control", 3, "keydown", "min"], ["for", "date", 1, "fw-bold", 3, "ngClass"], [1, "col-12", "col-md-12", "mb-3"], ["for", "time", 1, "form-label", "test-clip", 3, "ngClass"], [1, "row", "g-3", "mt-4"], [3, "selectedDate", "bookedSlots"], [1, "col-12", "text-end"], [1, "btn", "btn-primary", "rounded-pill", "px-4", "shadow-sm", 3, "click"], [1, "btn", "btn-outline-warning", "rounded-pill", "px-4", "ms-2"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "packingHelp"], [1, "border", "rounded", "p-3", "h-100", "bg-white", "shadow-sm"], [1, "fw-bold", "d-block", "mb-2"], [3, "apartmentTypeForm"], ["type", "text", "id", "newAddress", "formControlName", "newAddress", "placeholder", "First Name", 1, "form-control", "apt-form-control"], ["for", "newAddress", 1, "fw-bold", 3, "ngClass"], [3, "contactInfoForm"], [3, "furnitureForm"], [3, "appliancesForm"], [3, "electronicsForm"], [3, "boxesForm"], [3, "specialItemsForm"], [1, "col-6", "col-md-4", "col-lg-3", "mb-3"], [1, "skeleton-slot"], [3, "selectedTimeEmitter", "touchedEmitter", "selectedDate", "bookedSlots"]], template: function ScheduleAppointmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "h4", 2);
      \u0275\u0275text(4, " Schedule Appointmment ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div");
      \u0275\u0275conditionalCreate(6, ScheduleAppointmentComponent_Conditional_6_Template, 6, 1, "div", 3);
      \u0275\u0275elementStart(7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "select", 9);
      \u0275\u0275listener("change", function ScheduleAppointmentComponent_Template_select_change_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onServiceTypeChange($event));
      });
      \u0275\u0275repeaterCreate(13, ScheduleAppointmentComponent_For_14_Template, 2, 2, "option", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "label", 11);
      \u0275\u0275text(16, "Select Service Type");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, ScheduleAppointmentComponent_Conditional_17_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, ScheduleAppointmentComponent_Conditional_18_Template, 2, 1, "div", 7);
      \u0275\u0275conditionalCreate(19, ScheduleAppointmentComponent_Conditional_19_Template, 5, 1, "div", 13);
      \u0275\u0275conditionalCreate(20, ScheduleAppointmentComponent_Conditional_20_Template, 5, 1, "div", 13);
      \u0275\u0275elementStart(21, "div", 7)(22, "div", 8);
      \u0275\u0275element(23, "input", 14);
      \u0275\u0275elementStart(24, "label", 15);
      \u0275\u0275text(25, "Current Address *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, ScheduleAppointmentComponent_Conditional_26_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, ScheduleAppointmentComponent_Conditional_27_Template, 6, 4, "div", 7);
      \u0275\u0275elementStart(28, "div", 7)(29, "div", 8);
      \u0275\u0275element(30, "textarea", 16);
      \u0275\u0275elementStart(31, "label", 17);
      \u0275\u0275text(32, "Notes *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, ScheduleAppointmentComponent_Conditional_33_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, ScheduleAppointmentComponent_Conditional_34_Template, 4, 1, "div", 18);
      \u0275\u0275conditionalCreate(35, ScheduleAppointmentComponent_Conditional_35_Template, 4, 1, "div", 18);
      \u0275\u0275conditionalCreate(36, ScheduleAppointmentComponent_Conditional_36_Template, 4, 1, "div", 18);
      \u0275\u0275conditionalCreate(37, ScheduleAppointmentComponent_Conditional_37_Template, 4, 1, "div", 18);
      \u0275\u0275conditionalCreate(38, ScheduleAppointmentComponent_Conditional_38_Template, 4, 1, "div", 18);
      \u0275\u0275conditionalCreate(39, ScheduleAppointmentComponent_Conditional_39_Template, 4, 1, "div", 18);
      \u0275\u0275elementStart(40, "div", 19)(41, "div", 7)(42, "div", 8)(43, "input", 20);
      \u0275\u0275listener("keydown", function ScheduleAppointmentComponent_Template_input_keydown_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.preventTyping($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "label", 21);
      \u0275\u0275text(45, "Appointment Date *");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(46, ScheduleAppointmentComponent_Conditional_46_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 22)(48, "label", 23);
      \u0275\u0275text(49, "Appointment Time *");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, ScheduleAppointmentComponent_Conditional_50_Template, 2, 0, "div", 12);
      \u0275\u0275conditionalCreate(51, ScheduleAppointmentComponent_Conditional_51_Template, 3, 1, "div", 24)(52, ScheduleAppointmentComponent_Conditional_52_Template, 1, 2, "app-time-picker", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 26)(54, "button", 27);
      \u0275\u0275listener("click", function ScheduleAppointmentComponent_Template_button_click_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scheduleAppointment());
      });
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 28);
      \u0275\u0275text(57, "Cancel");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.scheduleAppointmentError() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.appointmentForm);
      const serviceTypeControl_r8 = ctx.appointmentForm.get("serviceType");
      const serviceTypeValidity_r9 = serviceTypeControl_r8.touched && serviceTypeControl_r8.invalid && serviceTypeControl_r8.hasError("required");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.derivedServicesList());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(serviceTypeValidity_r9 ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("packingHelp") ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("movingFrom") ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("movingTo") ? 20 : -1);
      const currentAddressControl_r10 = ctx.appointmentForm.get("currentAddress");
      const currentAddressValidity_r11 = currentAddressControl_r10.touched && currentAddressControl_r10.invalid && currentAddressControl_r10.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c08, currentAddressValidity_r11));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(currentAddressValidity_r11 ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("newAddress") ? 27 : -1);
      const messageControl_r12 = ctx.appointmentForm.get("note");
      const messageValidity_r13 = messageControl_r12.touched && messageControl_r12.invalid && messageControl_r12.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c08, messageValidity_r13));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(messageValidity_r13 ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("contactInfo") ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("furniture") ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("appliances") ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("electronics") ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("boxes") ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appointmentForm.contains("specialItems") ? 39 : -1);
      const dateControl_r14 = ctx.appointmentForm.get("appointment.date");
      const dateValidity_r15 = dateControl_r14.touched && dateControl_r14.invalid && dateControl_r14.hasError("required");
      \u0275\u0275advance(4);
      \u0275\u0275property("min", ctx.minDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c08, dateValidity_r15));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(dateValidity_r15 ? 46 : -1);
      const timeControl_r16 = ctx.appointmentForm.get("appointment.time");
      const timeControlValidity_r17 = timeControl_r16.touched && timeControl_r16.invalid && timeControl_r16.hasError("required");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c08, timeControlValidity_r17));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(timeControlValidity_r17 ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.engagedSlotsListIsLoading() ? 51 : 52);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.scheduleApointmentApiProgress() ? "Scheduling..." : "Schedule", " ");
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FurnitureComponent,
    AppliancesComponent,
    TimePickerComponent,
    NgClass,
    ApartmentTypeComponent,
    ElectronicsComponent,
    BoxesComponent,
    SpecialItemsComponent,
    PackingComponent,
    ContactInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleAppointmentComponent, [{
    type: Component,
    args: [{ selector: "schedule-appointment", imports: [
      FormsModule,
      ReactiveFormsModule,
      FurnitureComponent,
      AppliancesComponent,
      TimePickerComponent,
      NgClass,
      ApartmentTypeComponent,
      ElectronicsComponent,
      BoxesComponent,
      SpecialItemsComponent,
      PackingComponent,
      ContactInfoComponent
    ], providers: [AppointmentApiService], template: `<div class="info_container">

<div class="">
  <div class="">
    <h4 class="test-clip">
      Schedule Appointmment
    </h4>
  </div>
  <div>
    @if (scheduleAppointmentError()) {
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{{scheduleAppointmentError()}}</strong>
      <button (click)="closeAlert()" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    }

    <div class="container mt-4">
      <form [formGroup]="appointmentForm">
        <div class="row">

          <!-- <div class="row mb-4"> -->
            <!-- Moving From -->

                      <!-- Service Type -->
          <div class="col-12 col-md-4 mb-3">
            @let serviceTypeControl = appointmentForm.get('serviceType');
            @let serviceTypeValidity = serviceTypeControl.touched && serviceTypeControl.invalid && serviceTypeControl.hasError('required');

            <div class="form-floating">
              <select 
                class="form-select" 
                id="floatingSelect"
                formControlName="serviceType"
                (change)="onServiceTypeChange($event)"
                aria-label="Floating label select example">
                @for (item of derivedServicesList(); track item.key) {
                  <option [value]="item.key">{{item.value}}</option>
                }
              </select>
              <label class="fw-bold" for="floatingSelect">Select Service Type</label>
            </div>

            @if (serviceTypeValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
          @if (appointmentForm.contains('packingHelp')) {
          <div class="col-12 col-md-4 mb-3">
            <packing [packingHelp]="appointmentForm.get('packingHelp')" />
          </div>
          }

          @if (appointmentForm.contains('movingFrom')) {
          <div class="col-12 col-md-6 mb-3">
            <div class="border rounded p-3 h-100 bg-white shadow-sm">
              <label class="fw-bold d-block mb-2">Moving From</label>
              <apartment-type [apartmentTypeForm]="appointmentForm.get('movingFrom')" />
            </div>
          </div>
          }

          <!-- Moving To -->
          @if (appointmentForm.contains('movingTo')) {
          <div class="col-12 col-md-6 mb-3">
            <div class="border rounded p-3 h-100 bg-white shadow-sm">
              <label class="fw-bold d-block mb-2">Moving To</label>
              <apartment-type [apartmentTypeForm]="appointmentForm.get('movingTo')" />
            </div>
          </div>
          }
          <!-- </div> -->

          <!-- First Name -->

          <div class="col-12 col-md-4 mb-3">
            @let currentAddressControl = appointmentForm.get('currentAddress');
            @let currentAddressValidity = currentAddressControl.touched && currentAddressControl.invalid &&
            currentAddressControl.hasError('required');

            <div class="form-floating">
              <input 
                type="text" 
                class="form-control apt-form-control" 
                id="currentAddress" 
                formControlName="currentAddress"
                placeholder="First Name">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': currentAddressValidity }" for="currentAddress" class="fw-bold">Current Address *</label>
            </div>

            @if (currentAddressValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
          @if (appointmentForm.contains('newAddress')) {
          <div class="col-12 col-md-4 mb-3">
            @let newAddressControl = appointmentForm.get('newAddress');
            @let newAddressValidity = newAddressControl.touched && newAddressControl.invalid &&
            newAddressControl.hasError('required');

            <div class="form-floating">
              <input 
                type="text" 
                class="form-control apt-form-control" 
                id="newAddress" 
                formControlName="newAddress"
                placeholder="First Name">
              <label class="fw-bold" [ngClass]="{ 'invalid-label': newAddressValidity }" for="newAddress" class="fw-bold">New Address *</label>
            </div>

            @if (newAddressValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
          }

                    <!-- Notes -->
          <div class="col-12 col-md-4 mb-3">
            @let messageControl = appointmentForm.get('note');
            @let messageValidity = messageControl.touched && messageControl.invalid &&
            messageControl.hasError('required');
            <div class="form-floating">
              <textarea class="form-control" id="note" formControlName="note" rows="1"></textarea>
              <label class="fw-bold" [ngClass]="{'invalid-label': messageValidity}" for="note">Notes *</label>
            </div>
            @if (messageValidity) {
            <div class="apt-validation">This is a required field</div>
            }
          </div>
          @if (appointmentForm.contains('contactInfo')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Contact Info:</label>
            <contact-info [contactInfoForm]="appointmentForm.get('contactInfo')" />
          </div>
          }

          @if (appointmentForm.contains('furniture')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Furniture:</label>
            <furniture [furnitureForm]="appointmentForm.get('furniture')" />
          </div>
          }
          @if (appointmentForm.contains('appliances')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Appliances:</label>
            <appliances [appliancesForm]="appointmentForm.get('appliances')" />
          </div>
          }
          @if (appointmentForm.contains('electronics')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Electronics:</label>
            <electronics [electronicsForm]="appointmentForm.get('electronics')" />
          </div>
          }
          @if (appointmentForm.contains('boxes')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Boxes:</label>
            <boxes [boxesForm]="appointmentForm.get('boxes')" />
          </div>
          }
          @if (appointmentForm.contains('specialItems')) {
          <div class="border rounded p-3 h-100 bg-white shadow-sm mb-3">
            <label class="fw-bold d-block mb-2">Special Items:</label>
            <special-items [specialItemsForm]="appointmentForm.get('specialItems')" />
          </div>
          }

          <!-- Appointment Group: Date -->
          <div formGroupName="appointment">
            <div class="col-12 col-md-4 mb-3">
              @let dateControl = appointmentForm.get('appointment.date');
              @let dateValidity = dateControl.touched && dateControl.invalid && dateControl.hasError('required');
              <div class="form-floating ">

                <input (keydown)="preventTyping($event)" [min]="minDate" type="date" class="form-control apt-form-control" id="date"
                  formControlName="date">
                <label class="fw-bold" [ngClass]="{'invalid-label': dateValidity}" for="date">Appointment Date
                  *</label>
              </div>
              @if (dateValidity) {
              <div class="apt-validation">This is a required field</div>
              }
            </div>

            <!-- Appointment Group: Time -->
            <div class="col-12 col-md-12 mb-3">

              @let timeControl = appointmentForm.get('appointment.time');
              @let timeControlValidity = timeControl.touched && timeControl.invalid && timeControl.hasError('required');
              <label [ngClass]="{'invalid-label': timeControlValidity}" for="time" class="form-label test-clip">Appointment Time
                *</label>
              @if (timeControlValidity) {
              <div class="apt-validation">This is a required field</div>
              }
              @if(engagedSlotsListIsLoading()) {
                <div class="row g-3 mt-4">
                  @for (item of [1,2,3,4]; track $index) {
                    <div class="col-6 col-md-4 col-lg-3 mb-3">
                      <div class="skeleton-slot"></div>
                    </div>
                  }
                </div>
              } @else {
              <app-time-picker 
                [selectedDate]="appointmentForm.get('appointment').get('date').value"
                [bookedSlots]="engagedSlotsList()" 
                (selectedTimeEmitter)="selectedTime($event)"
                (touchedEmitter)="touchedEvent()" 
                />
              }
            </div>
          </div>

          <!-- Submit Button -->
          <div class="col-12 text-end">
            <button class="btn btn-primary rounded-pill px-4 shadow-sm"
              (click)="scheduleAppointment()"> {{ scheduleApointmentApiProgress() ? 'Scheduling...' : 'Schedule'}}
            </button>
            <button class="btn btn-outline-warning rounded-pill px-4 ms-2">Cancel</button>
          </div>

        </div>
      </form>
    </div>
  </div>
</div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleAppointmentComponent, { className: "ScheduleAppointmentComponent", filePath: "src/app/schedule-appointment/schedule-appointment.component.ts", lineNumber: 31 });
})();

export {
  ScheduleAppointmentComponent
};
//# sourceMappingURL=chunk-RSUFXV2J.js.map

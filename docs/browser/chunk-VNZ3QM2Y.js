import {
  addDays
} from "./chunk-MOPV73KR.js";
import {
  AdminApiService,
  UserDetailsComponent
} from "./chunk-NQHJKW2H.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  format,
  ɵNgNoValidate
} from "./chunk-FYJSCDUN.js";
import {
  ISODateFormatter,
  dateFormatter
} from "./chunk-4SRBZINW.js";
import "./chunk-MWOOTSI3.js";
import {
  Component,
  computed,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L2C4MEM5.js";

// src/app/admin/date-search/date-search.component.ts
function DateSearchComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-details", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("userDetailsList", ctx_r0.userDetailsList());
  }
}
function DateSearchComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "strong");
    \u0275\u0275text(2, "No Appointments for the selected date.");
    \u0275\u0275elementEnd()();
  }
}
function DateSearchComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DateSearchComponent_Conditional_16_Conditional_0_Template, 3, 0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.userDetailsListLoading() ? 0 : -1);
  }
}
var DateSearchComponent = class _DateSearchComponent {
  adminApiService = inject(AdminApiService);
  date = new FormControl(format(/* @__PURE__ */ new Date(), ISODateFormatter));
  minDate = format(addDays(/* @__PURE__ */ new Date(), 0), ISODateFormatter);
  userDetailsList = computed(() => this.adminApiService.fetchAppointmentsByDateResource.value()?.data, ...ngDevMode ? [{ debugName: "userDetailsList" }] : []);
  userDetailsListLoading = computed(() => this.adminApiService.fetchAppointmentsByDateResource.isLoading(), ...ngDevMode ? [{ debugName: "userDetailsListLoading" }] : []);
  selectedDate = "";
  ngOnInit() {
    this.adminApiService.setDate();
    this.date.valueChanges.pipe(map((v) => this.#dateFormatter(v))).subscribe((v) => {
      this.selectedDate = v;
    });
  }
  preventTyping(event) {
    event.preventDefault();
  }
  #dateFormatter(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    const formattedDate = format(localDate, dateFormatter);
    return formattedDate;
  }
  searchByDate() {
    this.adminApiService.date.set(this.selectedDate);
  }
  updateRecordStatus() {
    this.adminApiService.updateStatus("", "Done").subscribe((resp) => {
      console.log();
      this.adminApiService.fetchAppointmentsByDateResource.reload();
    }, (error) => {
      console.log();
    });
  }
  ngOnDestroy() {
    this.adminApiService.resetDate();
  }
  static \u0275fac = function DateSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateSearchComponent, selectors: [["app-date-search"]], features: [\u0275\u0275ProvidersFeature([AdminApiService])], decls: 17, vars: 2, consts: [[1, "card", "card-shadow"], [1, "card-header"], [1, "test-clip"], [1, "card-body"], [1, "row", "align-items-end"], [1, "col-12", "col-md-6", "mb-3"], [1, "form-floating"], ["type", "date", "id", "date", 1, "form-control", "apt-form-control", 3, "keydown", "formControl"], ["for", "date"], [1, "col-12", "col-md-3", "mb-3", "text-md-start", "text-end"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill", "shadow-sm", "w-md-auto", 3, "click"], [3, "userDetailsList"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "mt-3"]], template: function DateSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Search By Date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "input", 7);
      \u0275\u0275listener("keydown", function DateSearchComponent_Template_input_keydown_9_listener($event) {
        return ctx.preventTyping($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "label", 8);
      \u0275\u0275text(11, "Date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
      \u0275\u0275listener("click", function DateSearchComponent_Template_button_click_13_listener() {
        return ctx.searchByDate();
      });
      \u0275\u0275text(14, " Search ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(15, DateSearchComponent_Conditional_15_Template, 1, 1, "user-details", 11)(16, DateSearchComponent_Conditional_16_Template, 1, 1);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formControl", ctx.date);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_1_0 = ctx.userDetailsList()) == null ? null : tmp_1_0.length) > 0 ? 15 : 16);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, UserDetailsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateSearchComponent, [{
    type: Component,
    args: [{ selector: "app-date-search", imports: [FormsModule, ReactiveFormsModule, UserDetailsComponent], providers: [AdminApiService], template: '<div class="card card-shadow">\n    <div class="card-header">\n        <h4 class="test-clip">Search By Date</h4>\n    </div>\n    <div class="card-body">\n        <form> <!-- optional wrapper -->\n            <div class="row align-items-end">\n                <!-- Email Input -->\n                <div class="col-12 col-md-6 mb-3">\n                    <div class="form-floating">\n                        <input (keydown)="preventTyping($event)" type="date" class="form-control apt-form-control"\n                            id="date" [formControl]="date">\n                        <label for="date">Date</label>\n                    </div>\n                </div>\n\n                <!-- Button -->\n                <div class="col-12 col-md-3 mb-3 text-md-start text-end">\n                    <button class="btn btn-primary rounded-pill shadow-sm w-md-auto" type="submit"\n                        (click)="searchByDate()">\n                        Search\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n@if (userDetailsList()?.length > 0) {\n  <user-details [userDetailsList]="userDetailsList()"/>\n} @else {\n      @if(!userDetailsListLoading()) {\n        <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">\n            <strong>No Appointments for the selected date.</strong>\n          </div>\n    }\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateSearchComponent, { className: "DateSearchComponent", filePath: "src/app/admin/date-search/date-search.component.ts", lineNumber: 15 });
})();
export {
  DateSearchComponent
};
//# sourceMappingURL=chunk-VNZ3QM2Y.js.map

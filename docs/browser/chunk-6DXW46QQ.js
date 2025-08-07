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
  ɵNgNoValidate
} from "./chunk-FYJSCDUN.js";
import "./chunk-4SRBZINW.js";
import "./chunk-MWOOTSI3.js";
import {
  Component,
  computed,
  inject,
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

// src/app/admin/email-search/email-search.component.ts
function EmailSearchComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-details", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("userDetailsList", ctx_r0.selectedEmailRecord());
  }
}
function EmailSearchComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "strong");
    \u0275\u0275text(2, "No Appointments for the selected date.");
    \u0275\u0275elementEnd()();
  }
}
function EmailSearchComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmailSearchComponent_Conditional_16_Conditional_0_Template, 3, 0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.userDetailsListLoading() ? 0 : -1);
  }
}
var EmailSearchComponent = class _EmailSearchComponent {
  adminApiService = inject(AdminApiService);
  email = new FormControl("");
  selectedEmailRecord = computed(() => this.adminApiService.fetchAppointmentsByEmailResource.value()?.data, ...ngDevMode ? [{ debugName: "selectedEmailRecord" }] : []);
  userDetailsListLoading = computed(() => this.adminApiService.fetchAppointmentsByEmailResource.isLoading(), ...ngDevMode ? [{ debugName: "userDetailsListLoading" }] : []);
  searchByEmail() {
    this.adminApiService.email.set(this.email.getRawValue());
  }
  static \u0275fac = function EmailSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailSearchComponent, selectors: [["app-email-search"]], features: [\u0275\u0275ProvidersFeature([AdminApiService])], decls: 17, vars: 2, consts: [[1, "card", "card-shadow"], [1, "card-header"], [1, "test-clip"], [1, "card-body"], [1, "row", "align-items-end"], [1, "col-12", "col-md-6", "mb-3"], [1, "form-floating"], ["type", "text", "id", "email", "placeholder", "Email", 1, "form-control", "apt-form-control", 3, "formControl"], ["for", "email"], [1, "col-12", "col-md-3", "mb-3", "text-md-start", "text-end"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill", "shadow-sm", "w-100", "w-md-auto", 3, "click"], [3, "userDetailsList"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "mt-3"]], template: function EmailSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Search By Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275elementStart(10, "label", 8);
      \u0275\u0275text(11, "Email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
      \u0275\u0275listener("click", function EmailSearchComponent_Template_button_click_13_listener() {
        return ctx.searchByEmail();
      });
      \u0275\u0275text(14, " Search ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(15, EmailSearchComponent_Conditional_15_Template, 1, 1, "user-details", 11)(16, EmailSearchComponent_Conditional_16_Template, 1, 1);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formControl", ctx.email);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_1_0 = ctx.selectedEmailRecord()) == null ? null : tmp_1_0.length) > 0 ? 15 : 16);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, UserDetailsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSearchComponent, [{
    type: Component,
    args: [{ selector: "app-email-search", imports: [FormsModule, ReactiveFormsModule, UserDetailsComponent], providers: [AdminApiService], template: '<div class="card card-shadow">\n  <div class="card-header">\n    <h4 class="test-clip">Search By Email</h4>\n  </div>\n  <div class="card-body">\n    <form> <!-- optional wrapper -->\n      <div class="row align-items-end">\n        <!-- Email Input -->\n        <div class="col-12 col-md-6 mb-3">\n          <div class="form-floating">\n            <input type="text" class="form-control apt-form-control" id="email" [formControl]="email"\n              placeholder="Email" />\n            <label for="email">Email</label>\n          </div>\n        </div>\n\n        <!-- Button -->\n        <div class="col-12 col-md-3 mb-3 text-md-start text-end">\n          <button class="btn btn-primary rounded-pill shadow-sm w-100 w-md-auto" type="submit"\n            (click)="searchByEmail()">\n            Search\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n@if (selectedEmailRecord()?.length > 0) {\n<user-details [userDetailsList]="selectedEmailRecord()" />\n} @else {\n@if(!userDetailsListLoading()) {\n<div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">\n  <strong>No Appointments for the selected date.</strong>\n</div>\n}\n}' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailSearchComponent, { className: "EmailSearchComponent", filePath: "src/app/admin/email-search/email-search.component.ts", lineNumber: 12 });
})();
export {
  EmailSearchComponent
};
//# sourceMappingURL=chunk-6DXW46QQ.js.map

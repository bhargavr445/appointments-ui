import {
  format
} from "./chunk-FYJSCDUN.js";
import {
  timeSlots
} from "./chunk-4SRBZINW.js";
import {
  HttpClient,
  UpperCasePipe,
  httpResource
} from "./chunk-MWOOTSI3.js";
import {
  Component,
  Injectable,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-L2C4MEM5.js";

// src/app/commons/services/admin-api.service.ts
var AdminApiService = class _AdminApiService {
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : []);
  date = signal("", ...ngDevMode ? [{ debugName: "date" }] : []);
  http = inject(HttpClient);
  fetchAppointmentsByEmailResource = httpResource(() => this.email() ? `searchByEmail?email=${this.email()}` : void 0);
  fetchAppointmentsByDateResource = httpResource(() => this.date() ? `searchAppointmentsByDate?date=${this.date()}` : void 0);
  setDate() {
    this.date.set(format(/* @__PURE__ */ new Date(), "MM/dd/yyyy"));
  }
  resetDate() {
    this.date.set("");
  }
  updateStatus(_id, status) {
    return this.http.put("updateStatus", { _id, status });
  }
  static \u0275fac = function AdminApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminApiService, factory: _AdminApiService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminApiService, [{
    type: Injectable
  }], null, null);
})();

// src/app/commons/components/schedule-timer/schedule-timer.component.ts
var ScheduleTimerComponent = class _ScheduleTimerComponent {
  slots = timeSlots;
  time = input.required(...ngDevMode ? [{ debugName: "time" }] : []);
  derivedLabel = computed(() => this.deriveLabel(this.time()), ...ngDevMode ? [{ debugName: "derivedLabel" }] : []);
  deriveLabel(incomingTime) {
    return this.slots.find((slot) => slot.value == incomingTime);
  }
  static \u0275fac = function ScheduleTimerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleTimerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleTimerComponent, selectors: [["app-schedule-timer"]], inputs: { time: [1, "time"] }, decls: 2, vars: 1, template: function ScheduleTimerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.derivedLabel().label);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleTimerComponent, [{
    type: Component,
    args: [{
      selector: "app-schedule-timer",
      imports: [],
      template: `<span>{{derivedLabel().label}}</span>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleTimerComponent, { className: "ScheduleTimerComponent", filePath: "src/app/commons/components/schedule-timer/schedule-timer.component.ts", lineNumber: 9 });
})();

// src/app/admin/user-details/user-details.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "| Elevator: Yes");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "| Elevator: No");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("| Floor: ", item_r1.movingFrom == null ? null : item_r1.movingFrom.floorNumber);
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "strong");
    \u0275\u0275text(2, "Moving From:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_5_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(6, UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(7, UserDetailsComponent_For_1_Conditional_36_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r1.movingFrom == null ? null : item_r1.movingFrom.apartmentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1.movingFrom == null ? null : item_r1.movingFrom.elevator) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(item_r1.movingFrom == null ? null : item_r1.movingFrom.elevator) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1.movingFrom == null ? null : item_r1.movingFrom.floorNumber) !== void 0 ? 7 : -1);
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "| Elevator: Yes");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "| Elevator: No");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("| Floor: ", item_r1.movingTo == null ? null : item_r1.movingTo.floorNumber);
  }
}
function UserDetailsComponent_For_1_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "strong");
    \u0275\u0275text(2, "Moving To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_5_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(6, UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(7, UserDetailsComponent_For_1_Conditional_36_Conditional_2_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r1.movingTo == null ? null : item_r1.movingTo.apartmentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1.movingTo == null ? null : item_r1.movingTo.elevator) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(item_r1.movingTo == null ? null : item_r1.movingTo.elevator) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1.movingTo == null ? null : item_r1.movingTo.floorNumber) !== void 0 ? 7 : -1);
  }
}
function UserDetailsComponent_For_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, UserDetailsComponent_For_1_Conditional_36_Conditional_1_Template, 8, 4, "div", 13);
    \u0275\u0275conditionalCreate(2, UserDetailsComponent_For_1_Conditional_36_Conditional_2_Template, 8, 4, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.movingFrom) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.movingTo) ? 2 : -1);
  }
}
function UserDetailsComponent_For_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "strong");
    \u0275\u0275text(2, "Current Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1 == null ? null : item_r1.currentAddress);
  }
}
function UserDetailsComponent_For_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "strong");
    \u0275\u0275text(2, "New Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1 == null ? null : item_r1.newAddress);
  }
}
function UserDetailsComponent_For_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 8)(2, "strong");
    \u0275\u0275text(3, "Furniture:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "strong");
    \u0275\u0275text(10, "Appliances:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total Pieces: ", item_r1.furniture == null ? null : item_r1.furniture.numberOfFurniturePieces);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Large Items: ", item_r1.furniture == null ? null : item_r1.furniture.listOfLargeItems);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Large Appliances: ", item_r1.appliances == null ? null : item_r1.appliances.numberOfLargeAppliances);
  }
}
function UserDetailsComponent_For_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 8)(2, "strong");
    \u0275\u0275text(3, "Boxes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Number of Boxes: ", item_r1.boxes == null ? null : item_r1.boxes.noOfBoxes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contains Fragile Items: ", item_r1.boxes == null ? null : item_r1.boxes.containsFragileItems);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Fragile Items Desc: ", item_r1.boxes == null ? null : item_r1.boxes.fragileItemsDesc);
  }
}
function UserDetailsComponent_For_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "strong");
    \u0275\u0275text(3, "Electronics:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "strong");
    \u0275\u0275text(8, "Packing Help:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" Monitors/Computers: ", item_r1.electronics == null ? null : item_r1.electronics.numberOfMonitorsAndComputers, " | TVs: ", item_r1.electronics == null ? null : item_r1.electronics.numberOfTvs, " | Others: ", item_r1.electronics == null ? null : item_r1.electronics.otherElectronics, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.packingHelp) ? "Yes" : "No");
  }
}
function UserDetailsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h6", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "uppercase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "strong");
    \u0275\u0275text(18, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8)(21, "strong");
    \u0275\u0275text(22, "Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "app-schedule-timer", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 7)(25, "div", 10)(26, "strong");
    \u0275\u0275text(27, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 11);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 7)(31, "div", 10)(32, "strong");
    \u0275\u0275text(33, "Notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 3);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(36, UserDetailsComponent_For_1_Conditional_36_Template, 3, 2, "div", 7);
    \u0275\u0275elementStart(37, "div", 12);
    \u0275\u0275conditionalCreate(38, UserDetailsComponent_For_1_Conditional_38_Template, 5, 1, "div", 8);
    \u0275\u0275conditionalCreate(39, UserDetailsComponent_For_1_Conditional_39_Template, 5, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, UserDetailsComponent_For_1_Conditional_40_Template, 13, 3, "div", 12);
    \u0275\u0275conditionalCreate(41, UserDetailsComponent_For_1_Conditional_41_Template, 12, 3, "div", 12);
    \u0275\u0275conditionalCreate(42, UserDetailsComponent_For_1_Conditional_42_Template, 11, 4, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", item_r1 == null ? null : item_r1.firstName, " ", item_r1 == null ? null : item_r1.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r1 == null ? null : item_r1.email, " | ", item_r1 == null ? null : item_r1.phoneNumber);
    const derivedService_r2 = `${(item_r1 == null ? null : item_r1.serviceType) === "j" ? "Junk" : "Moving"}`;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(`${derivedService_r2} cat d-none d-sm-inline`);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(derivedService_r2);
    \u0275\u0275advance();
    \u0275\u0275classMap(`${derivedService_r2} cat d-inline d-sm-none`);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, item_r1 == null ? null : item_r1.serviceType));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", item_r1 == null ? null : item_r1.appointmentDate, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", item_r1 == null ? null : item_r1.appointmentTime);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r1.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.note) ?? "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.movingFrom) || (item_r1 == null ? null : item_r1.movingTo) ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.currentAddress) ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.newAddress) ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.furniture) ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.boxes) ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r1 == null ? null : item_r1.electronics) ? 42 : -1);
  }
}
var UserDetailsComponent = class _UserDetailsComponent {
  userDetailsList = input.required(...ngDevMode ? [{ debugName: "userDetailsList" }] : []);
  static \u0275fac = function UserDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDetailsComponent, selectors: [["user-details"]], inputs: { userDetailsList: [1, "userDetailsList"] }, decls: 2, vars: 0, consts: [[1, "card", "card-shadow", "shadow-sm", "mb-3", "mt-3", "card-expand"], [1, "card-header", "bg-light"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap"], [1, "mb-0"], [1, "text-muted"], [1, "mar-t-12"], [1, "card-body", "border"], [1, "row", "mb-2"], [1, "col-12", "col-md-6"], [3, "time"], [1, "col-12"], [1, "badge", "bg-success", "text-capitalize"], [1, "row", "mb-2", "border-bottom"], [1, "col-12", "col-md-6", "border-bottom"]], template: function UserDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, UserDetailsComponent_For_1_Template, 43, 22, "div", 0, _forTrack0);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.userDetailsList());
    }
  }, dependencies: [ScheduleTimerComponent, UpperCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsComponent, [{
    type: Component,
    args: [{ selector: "user-details", imports: [ScheduleTimerComponent, UpperCasePipe], template: `@for (item of userDetailsList(); track item._id) {
<div class="card card-shadow shadow-sm mb-3 mt-3 card-expand">

  <div class="card-header bg-light">
  <div class="d-flex justify-content-between align-items-start flex-wrap">

    <!-- Left side: Name + email -->
    <div>
      <h6 class="mb-0">{{ item?.firstName }} {{ item?.lastName }}</h6>
      <small class="text-muted">{{ item?.email }} | {{ item?.phoneNumber }}</small>
    </div>

    <!-- Right side: Service type -->
    <div class="mar-t-12">
      @let derivedService = \`\${item?.serviceType === 'j' ? 'Junk': 'Moving' }\`;
      <!-- Full text - visible only on desktop -->
      <span  [class]="\`\${derivedService} cat d-none d-sm-inline\`">{{derivedService}}</span>

      <!-- Short text - visible only on mobile -->
      <span [class]="\`\${derivedService} cat d-inline d-sm-none\`">{{item?.serviceType | uppercase}}</span>
    </div>

  </div>
</div>

  <!-- Body -->
  <div class="card-body border">
    <!-- Date and Time -->
    <div class="row mb-2">
      <div class="col-12 col-md-6">
        <strong>Date:</strong> {{ item?.appointmentDate }}
      </div>
      <div class="col-12 col-md-6">
        <strong>Time:</strong> <app-schedule-timer [time]="item?.appointmentTime" />
      </div>
    </div>

    <!-- Status -->
    <div class="row mb-2">
      <div class="col-12">
        <strong>Status:</strong>
        <span class="badge bg-success text-capitalize">{{ item.status }}</span>
      </div>
    </div>

    <!-- Service Type -->
    <!-- <div class="row mb-2">
      @let derivedService = \`\${item?.serviceType === 'j' ? 'Junk': 'Moving' }\`;
      <div class="col-12">
        <strong>Service Type:</strong>
        <span [class]="\`\${derivedService} cat\`">{{ derivedService }}</span>
      </div>
    </div> -->

    <!-- Notes -->
    <div class="row mb-2">
      <div class="col-12">
        <strong>Notes:</strong>
        <p class="mb-0">{{ item?.note ?? 'N/A' }}</p>
      </div>
    </div>

    <!-- Moving From & To -->
     @if (item?.movingFrom || item?.movingTo) {
    <div class="row mb-2">
      @if (item?.movingFrom) {
      <div class="col-12 col-md-6 border-bottom">
        <strong>Moving From:</strong>
        <div>
          {{ item.movingFrom?.apartmentType }} 
          @if (item.movingFrom?.elevator) {
              <span >| Elevator: Yes</span>
          }
          @if (!item.movingFrom?.elevator) {
              <span>| Elevator: No</span>
          }
          @if (item.movingFrom?.floorNumber !== undefined) {
              <span>| Floor: {{ item.movingFrom?.floorNumber }}</span>
          }
        </div>
      </div>
      }
      @if (item?.movingTo) {

      <div class="col-12 col-md-6 border-bottom">
        <strong>Moving To:</strong>
        <!-- <div>{{ item.movingTo?.apartmentType }}</div> -->
        <div>
          {{ item.movingTo?.apartmentType }} 
          @if (item.movingTo?.elevator) {
              <span >| Elevator: Yes</span>
          }
          @if (!item.movingTo?.elevator) {
              <span>| Elevator: No</span>
          }
          @if (item.movingTo?.floorNumber !== undefined) {
              <span>| Floor: {{ item.movingTo?.floorNumber }}</span>
          }
        </div>
      </div>
    }
    </div>
  }

    <!-- Addresses -->
     
    <div class="row mb-2 border-bottom">
      @if(item?.currentAddress){
      <div class="col-12 col-md-6">
        <strong>Current Address:</strong>
        <div>{{ item?.currentAddress }}</div>
      </div>
      }
      @if(item?.newAddress){
      <div class="col-12 col-md-6">
        <strong>New Address:</strong>
        <div>{{ item?.newAddress }}</div>
      </div>
      }
    </div>


    <!-- Furniture & Appliances -->
    @if (item?.furniture) {
    <div class="row mb-2 border-bottom">
      <div class="col-12 col-md-6">
        <strong>Furniture:</strong>
        <div>Total Pieces: {{ item.furniture?.numberOfFurniturePieces }}</div>
        <div>Large Items: {{ item.furniture?.listOfLargeItems }}</div>
      </div>
      <div class="col-12 col-md-6">
        <strong>Appliances:</strong>
        <div>Large Appliances: {{ item.appliances?.numberOfLargeAppliances }}</div>
      </div>
    </div>
    }
    <!-- Boxes & Special Items -->
    @if (item?.boxes) {
    <div class="row mb-2 border-bottom">
      <div class="col-12 col-md-6">
        <strong>Boxes:</strong>
        <div>Number of Boxes: {{ item.boxes?.noOfBoxes }}</div>
      </div>
      <div class="col-12 col-md-6">
        <div>Contains Fragile Items: {{ item.boxes?.containsFragileItems }}</div>
      </div>
      <div class="col-12 col-md-6">
        <div>Fragile Items Desc: {{ item.boxes?.fragileItemsDesc }}</div>
      </div>
    </div>
    }

    <!-- Electronics -->
     @if (item?.electronics) {
    <div class="row mb-2">
      <div class="col-12 col-md-6 border-bottom">
        <strong>Electronics:</strong>
        <div>
          Monitors/Computers: {{ item.electronics?.numberOfMonitorsAndComputers }} |
          TVs: {{ item.electronics?.numberOfTvs }} |
          Others: {{ item.electronics?.otherElectronics }}
        </div>
      </div>
      <div class="col-12 col-md-6 border-bottom">
        <strong>Packing Help:</strong>
        <div>{{ item?.packingHelp ? 'Yes' : 'No' }}</div>
      </div>
    </div>
  }
  </div>
</div>
}` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDetailsComponent, { className: "UserDetailsComponent", filePath: "src/app/admin/user-details/user-details.component.ts", lineNumber: 11 });
})();

export {
  AdminApiService,
  UserDetailsComponent
};
//# sourceMappingURL=chunk-NQHJKW2H.js.map

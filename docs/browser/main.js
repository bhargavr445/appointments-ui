import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling
} from "./chunk-Z6AWMSNE.js";
import {
  metaData
} from "./chunk-4SRBZINW.js";
import {
  NgStyle,
  provideHttpClient,
  withInterceptors
} from "./chunk-MWOOTSI3.js";
import {
  Component,
  HostListener,
  ViewContainerRef,
  filter,
  inject,
  linkedSignal,
  model,
  output,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresolveWindow,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2C4MEM5.js";

// src/app/landing-page/services-info/services-info.component.ts
var ServicesInfoComponent = class _ServicesInfoComponent {
  appConstants = metaData;
  static \u0275fac = function ServicesInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesInfoComponent, selectors: [["app-services-info"]], decls: 44, vars: 8, consts: [[1, ""], [1, "row", "align-items-center", "mar-l-r-0"], [1, "col-md-12", "mb-md-0", "pad-l-r-0"], ["src", "assets/images/img.png", "alt", "Moving truck and boxes", 1, "img-fluid", "shadow-sm", "responsive-image", "col-md-12"], [1, "container", "mar-t-b"], [1, "row", "g-4"], [1, "col-12", "col-md-12", "col-lg-4"], [1, "text-white", "pad-t-b-10", "section_main"], [1, "text-center"], [2, "margin-top", "10px", "margin-bottom", "20px"], [1, "fw-bold", "mb-4", "test-clip"], [1, "d-flex", "flex-row", "justify-content-center", "gap-3", "mb-4", "flex-wrap", "mar-t-b"], ["routerLink", "/junk", 1, "btn", "btn-warning", "text-uppercase", "fw-bold", "quote-btn", "ft-13"], ["routerLink", "/schedule/m", 1, "btn", "btn-warning", "text-uppercase", "fw-bold", "quote-btn", "ft-13"], [1, "d-flex", "flex-nowrap", "flex-sm-nowrap", "justify-content-center", "gap-2", "mar-t-b"], ["type", "text", "placeholder", "Enter ZIP code", 1, "form-control", "w-auto", 2, "min-width", "200px"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "pad-t-b-20", "pad-10", "section_main"], [1, "row", "justify-content-center", "g-3"], [1, "col-6"], [1, "card", "service-card", "shadow-sm", "h-100", "text-center"], [1, "card-body"], ["src", "assets/images/junk.png", "alt", "Junk Removal", 1, "service-icon", 2, "mix-blend-mode", "multiply"], [1, "fw-bold"], [1, "text-muted"], ["src", "assets/images/mover.png", "alt", "Moving Help", 1, "service-icon"]], template: function ServicesInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "section", 7)(8, "div", 8)(9, "div", 9)(10, "h2", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "form", 14);
      \u0275\u0275element(18, "input", 15);
      \u0275\u0275elementStart(19, "button", 16);
      \u0275\u0275text(20, "Search");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 17)(22, "section", 18)(23, "div", 8)(24, "div", 9)(25, "h2", 10);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22);
      \u0275\u0275element(31, "img", 23);
      \u0275\u0275elementStart(32, "h6", 24);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 25);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "div", 22);
      \u0275\u0275element(39, "img", 26);
      \u0275\u0275elementStart(40, "h6", 24);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 25);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.appConstants.bookingInfo);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.NEED_JUNK_REMOVED, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.NEED_MOVING_HELP, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.appConstants.services);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.appConstants.Junk_Removal);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.Junk_removal_info);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.appConstants.Moving_Help);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.Moving_Help_info, " ");
    }
  }, dependencies: [RouterLink], styles: ["\n\n.service-card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fdfdfd;\n  transition: transform 0.9s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1019607843);\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n}\n.service-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 1rem;\n}\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.ft-13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n@media (min-width: 768px) {\n  .responsive-image[_ngcontent-%COMP%] {\n    height: 90vh;\n    object-fit: cover;\n  }\n}\nimg.img-fluid[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.card_border[_ngcontent-%COMP%] {\n  border: 5px solid #ffc107;\n}\n.info_section[_ngcontent-%COMP%] {\n  margin: 0 30px 40px 30px;\n}\n/*# sourceMappingURL=services-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesInfoComponent, [{
    type: Component,
    args: [{ selector: "app-services-info", imports: [RouterLink], template: `<!-- <img src="assets/images/landing.png" alt="Moving truck and boxes" class="img-fluid"/> -->
<section class="">
  <div class="row align-items-center mar-l-r-0">
    <div class="col-md-12 mb-md-0 pad-l-r-0">
      <img src="assets/images/img.png" alt="Moving truck and boxes"
        class="img-fluid shadow-sm responsive-image col-md-12" />
    </div>
  </div>
</section>

<div class="container mar-t-b">
  <div class="row g-4">

        <!-- Column 1 -->
        <div class="col-12 col-md-12 col-lg-4">
          <section class=" text-white pad-t-b-10 section_main">
            <div class="text-center">
              <div style="margin-top: 10px; margin-bottom: 20px;">
                <h2 class="fw-bold mb-4 test-clip">{{appConstants.bookingInfo}}</h2>
              </div>
          
              <div class="d-flex flex-row justify-content-center gap-3 mb-4 flex-wrap mar-t-b">
                <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" routerLink="/junk">
                  {{appConstants.NEED_JUNK_REMOVED}}
                </button>
                <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" routerLink="/schedule/m">
                  {{appConstants.NEED_MOVING_HELP}}
                </button>
              </div>
          
              <form class="d-flex flex-nowrap flex-sm-nowrap justify-content-center gap-2 mar-t-b">
                <input type="text" class="form-control w-auto" placeholder="Enter ZIP code" style="min-width: 200px;" />
                <button type="submit" class="btn btn-primary px-4">Search</button>
              </form>
          
            </div>
          </section>
        </div>

    <!-- Column 2 -->
    <div class="col-12 col-md-6 col-lg-4">
      <section class="pad-t-b-20 pad-10 section_main">
        <div class="text-center">
          <div style="margin-top: 10px; margin-bottom: 20px;">
            <h2 class="fw-bold mb-4 test-clip">{{appConstants.services}}</h2>
          </div>
          <!-- add 2 cards here -->
          <div class="row justify-content-center g-3">
            <!-- Junk Removal -->
            <div class="col-6">
              <div class="card service-card shadow-sm h-100 text-center ">
                <div class="card-body">
                  <img src="assets/images/junk.png" alt="Junk Removal" class="service-icon" style="mix-blend-mode: multiply;" />
                  <h6 class="fw-bold">{{appConstants.Junk_Removal}}</h6>
                  <p class="text-muted"> {{appConstants.Junk_removal_info}}</p>
                </div>
              </div>
            </div>
      
            <div class="col-6">
              <div class="card service-card shadow-sm h-100 text-center ">
                <div class="card-body">
                  <img src="assets/images/mover.png" alt="Moving Help" class="service-icon" />
                  <h6 class="fw-bold">{{appConstants.Moving_Help}}</h6>
                  <p class="text-muted">
                    {{appConstants.Moving_Help_info}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Column 3 -->
    <!-- <div class="col-12 col-md-6 col-lg-4">
      <section class=" pad-t-b-10 pad-10 section_main">
        <div class="text-center">
          <div style="margin-top: 10px; margin-bottom: 20px;">
            <h2 class="fw-bold mb-4 test-clip">{{appConstants.RELIABLE_MOVING_SERVICES}}</h2>
          </div>
          <div class="= justify-content-center g-3 mar-l-r-0">
            <div>
              <p class="text-muted info_section">
                {{appConstants.RELIABLE_MOVING_SERVICES_info}}
              </p>
            </div>
          </div>
          <h2 class="fw-bold mb-1 text-primary">{{appConstants.get_started}}</h2>
          <button class="btn btn-warning text-uppercase fw-bold quote-btn">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div> -->



  </div>
</div>

<!-- <section class=" text-white pad-t-b-20">
  <div class="text-center">
    <div style="margin-top: 10px; margin-bottom: 20px;">
      <h2 class="fw-bold mb-4 test-clip">BOOK JUNK REMOVAL OR<br> MOVING HELP TODAY</h2>
    </div>

    <div class="d-flex flex-row justify-content-center gap-3 mb-4 flex-wrap">
      <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" routerLink="/schedule">
        NEED JUNK REMOVED
      </button>
      <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" routerLink="/schedule">
        NEED MOVING HELP
      </button>
    </div>

    <form class="d-flex flex-nowrap flex-sm-nowrap justify-content-center gap-2">
      <input type="text" class="form-control w-auto" placeholder="Enter ZIP code" style="min-width: 200px;" />
      <button type="submit" class="btn btn-primary px-4">Search</button>
    </form>

  </div>
</section>


<section class=" pad-t-b-20 pad-10">
  <div class="text-center">
    <div style="margin-top: 10px; margin-bottom: 20px;">
      <h2 class="fw-bold mb-4 test-clip">Services</h2>
    </div>
    <div class="row justify-content-center g-3">
      <div class="col-6 col-md-2 col-sm-6">
        <div class="card service-card shadow-sm h-100 text-center ">
          <div class="card-body">
            <img src="assets/images/junk.png" alt="Junk Removal" class="service-icon" />
            <h6 class="fw-bold">Junk Removal</h6>
            <p class="text-muted">
              Whether you're relocating your home or business.
            </p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-6">
        <div class="card service-card shadow-sm h-100 text-center ">
          <div class="card-body">
            <img src="assets/images/mover.png" alt="Moving Help" class="service-icon" />
            <h6 class="fw-bold">Moving Help</h6>
            <p class="text-muted">
              Whether you're relocating your home or business
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class=" pad-t-b-20">
  <div class="text-center">
    <div style="margin-top: 10px; margin-bottom: 20px;">
      <h2 class="fw-bold mb-4 test-clip">Reliable Moving Services</h2>
    </div>
    <div class="row justify-content-center g-3 mar-l-r-0">
      <div class="col-6 col-md-10 col-sm-6">
        <p class="text-muted">
          Whether you're relocating your home or business, M & J Trucks delivers safe and stress-free moving experiences.
          Our dedicated team ensures your belongings arrive on time and intact.
        </p>
      </div>
    </div>
    <h2 class="fw-bold mb-1 text-primary">Ready To Get Started ?</h2>
    <button class="btn btn-warning text-uppercase fw-bold quote-btn" routerLink="/schedule">
      Get a Free Quote
    </button>
  </div>
</section> -->`, styles: ["/* src/app/landing-page/services-info/services-info.component.scss */\n.service-card {\n  border: none;\n  background-color: #fdfdfd;\n  transition: transform 0.9s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1019607843);\n}\n.service-card:hover {\n  transform: translateY(-4px);\n}\n.service-card .service-icon {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.service-card .service-icon {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n}\n.service-card h6 {\n  margin-top: 0.5rem;\n  font-size: 1rem;\n}\n.service-card p {\n  font-size: 0.875rem;\n}\n.ft-13 {\n  font-size: 13px;\n}\n@media (min-width: 768px) {\n  .responsive-image {\n    height: 90vh;\n    object-fit: cover;\n  }\n}\nimg.img-fluid {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.card_border {\n  border: 5px solid #ffc107;\n}\n.info_section {\n  margin: 0 30px 40px 30px;\n}\n/*# sourceMappingURL=services-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesInfoComponent, { className: "ServicesInfoComponent", filePath: "src/app/landing-page/services-info/services-info.component.ts", lineNumber: 11 });
})();

// src/app/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-services-info");
    }
  }, dependencies: [ServicesInfoComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      imports: [ServicesInfoComponent],
      template: `<app-services-info/>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 9 });
})();

// src/app/confirmation/confirmation.component.ts
var ConfirmationComponent = class _ConfirmationComponent {
  static \u0275fac = function ConfirmationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationComponent, selectors: [["app-confirmation"]], decls: 2, vars: 0, consts: [["role", "alert", 1, "alert", "alert-success", "mar-l-r-20", "mar-t-100"]], template: function ConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " \u{1F389} \u201CThanks! We'll review your info and contact you shortly with your custom quote.\u201D ");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "app-confirmation",
      imports: [],
      template: `
    <div class="alert alert-success mar-l-r-20 mar-t-100" role="alert">
  \u{1F389} \u201CThanks! We'll review your info and contact you shortly with your custom quote.\u201D
  </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationComponent, { className: "ConfirmationComponent", filePath: "src/app/confirmation/confirmation.component.ts", lineNumber: 12 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "confirm", component: ConfirmationComponent },
  { path: "about", loadComponent: () => import("./chunk-4JRRWJBZ.js").then((c) => c.AboutComponent) },
  { path: "junk", loadComponent: () => import("./chunk-62JUZECS.js").then((c) => c.JunkComponent) },
  { path: "faq", loadComponent: () => import("./chunk-RWE3NWUK.js").then((c) => c.FaqComponent) },
  { path: "schedule/:type", loadComponent: () => import("./chunk-A3O5V2C7.js").then((c) => c.ScheduleAppointmentComponent) },
  // {
  //     path: 'info',
  //     loadComponent: () => import('./info/info.component').then(c => c.InfoComponent),
  //     children: [
  //         { path: '', redirectTo: 'primary', pathMatch: 'full' },
  //         { path: 'primary', loadComponent: () => import('./info/personal-info/personal-info.component').then(c => c.PersonalInfoComponent) },
  //         { path: 'service', loadComponent: () => import('./info/services/services.component').then(c => c.ServicesComponent) },
  //         { path: 'location', loadComponent: () => import('./info/location/location.component').then(c => c.LocationComponent) }
  //     ]
  // },
  {
    path: "admin",
    loadComponent: () => import("./chunk-KP3A77UM.js").then((c) => c.AdminComponent),
    children: [
      { path: "", redirectTo: "date-search", pathMatch: "full" },
      { path: "email-search", loadComponent: () => import("./chunk-6DXW46QQ.js").then((c) => c.EmailSearchComponent) },
      { path: "date-search", loadComponent: () => import("./chunk-VNZ3QM2Y.js").then((c) => c.DateSearchComponent) }
    ]
  }
];

// src/environments/environment.prod.ts
var environment = {
  apiUrl: "https://appointments-api-smot.onrender.com/api/"
  // apiUrl: 'http://localhost:3000/api/'
};

// src/app/app.interceptor.ts
var appInterceptor = (req, next) => {
  const urlPrefix = environment.apiUrl;
  return next(req.clone({
    url: `${urlPrefix}${req.url}`
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling({ scrollPositionRestoration: "enabled" })),
    provideHttpClient(withInterceptors([appInterceptor]))
  ]
};

// src/app/landing-page/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [[1, "bg-dark", "text-white", "pt-4", "pb-3", "mt-auto"], [1, "container"], [1, "row", "text-center", "text-md-start"], [1, "col-md-4", "mb-3"], [1, "mb-1"], [1, "bg-light"], [1, "text-center", "small"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
      \u0275\u0275text(5, "TWO MEN & A DUCK");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "Reliable moving and junk removal services near you.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 3)(9, "h6");
      \u0275\u0275text(10, "Contact Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 4);
      \u0275\u0275text(12, "\u{1F4CD} 123 Main St, YourCity");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p", 4);
      \u0275\u0275text(14, "\u{1F4DE} (123) 456-7890");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(15, "hr", 5);
      \u0275\u0275domElementStart(16, "div", 6);
      \u0275\u0275text(17, " \xA9 2025 Two Men & A Duck. All rights reserved. ");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: '<footer class="bg-dark text-white pt-4 pb-3 mt-auto">\n  <div class="container">\n    <div class="row text-center text-md-start">\n      \n      <!-- Column 1: Brand -->\n      <div class="col-md-4 mb-3">\n        <h5>TWO MEN & A DUCK</h5>\n        <p>Reliable moving and junk removal services near you.</p>\n      </div>\n\n      <!-- Column 2: Quick Links -->\n      <!-- <div class="col-md-4 mb-3">\n        <h6>Quick Links</h6>\n        <ul class="list-unstyled">\n          <li><a href="/" class="text-white text-decoration-none">Home</a></li>\n          <li><a href="/services" class="text-white text-decoration-none">Services</a></li>\n          <li><a href="/contact" class="text-white text-decoration-none">Contact</a></li>\n        </ul>\n      </div> -->\n\n      <!-- Column 3: Contact -->\n      <div class="col-md-4 mb-3">\n        <h6>Contact Us</h6>\n        <p class="mb-1">\u{1F4CD} 123 Main St, YourCity</p>\n        <p class="mb-1">\u{1F4DE} (123) 456-7890</p>\n        <!-- <p>\u2709\uFE0F support@mjtrucks.com</p> -->\n      </div>\n\n    </div>\n\n    <hr class="bg-light" />\n\n    <div class="text-center small">\n      \xA9 2025 Two Men & A Duck. All rights reserved.\n    </div>\n  </div>\n</footer>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/landing-page/footer/footer.component.ts", lineNumber: 9 });
})();

// src/app/commons/components/modal/modal.component.ts
var _c0 = [[["", "header", ""]], [["", "body", ""]], [["", "footer", ""]]];
var _c1 = ["[header]", "[body]", "[footer]"];
var _c2 = (a0) => ({ display: a0 });
function ModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
var ModalComponent = class _ModalComponent {
  isOpen = model.required(...ngDevMode ? [{ debugName: "isOpen" }] : []);
  isOpneL = linkedSignal(this.isOpen);
  close = output();
  onClose() {
    this.isOpneL.set(false);
    this.close.emit();
  }
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { isOpen: [1, "isOpen"] }, outputs: { isOpen: "isOpenChange", close: "close" }, ngContentSelectors: _c1, decls: 11, vars: 4, consts: [["tabindex", "-1", 1, "modal", "fade", "show", 2, "z-index", "1055", 3, "ngStyle"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "modal-backdrop", "fade", "show", 2, "z-index", "1050"]], template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function ModalComponent_Template_button_click_5_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275projection(7, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275projection(9, 2);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(10, ModalComponent_Conditional_10_Template, 1, 0, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c2, ctx.isOpneL() ? "block" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.isOpneL() ? 10 : -1);
    }
  }, dependencies: [NgStyle], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5803921569);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{ selector: "app-modal", imports: [NgStyle], template: `<!-- Add \`fade\` for animation -->
<div class="modal fade show" tabindex="-1" [ngStyle]="{display: isOpneL() ? 'block': 'none'}" style="z-index: 1055;">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">



            <div class="modal-header">
                <ng-content select="[header]"></ng-content>
                <button type="button" class="btn-close" aria-label="Close" (click)="onClose()"></button>
            </div>


            <div class="modal-body">
                <ng-content select="[body]"></ng-content>
            </div>

            <div class="modal-footer">
                <ng-content select="[footer]"></ng-content>
            </div>

        </div>
    </div>
</div>

@if (isOpneL()) {
<div class="modal-backdrop fade show" style="z-index: 1050;"></div>
}
`, styles: ["/* src/app/commons/components/modal/modal.component.scss */\n.modal {\n  background: rgba(0, 0, 0, 0.5803921569);\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\nbody.modal-open {\n  overflow: hidden;\n}\n/*# sourceMappingURL=modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/commons/components/modal/modal.component.ts", lineNumber: 10 });
})();

// src/app/landing-page/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  #router = inject(Router);
  #vcr = inject(ViewContainerRef);
  appConstants = metaData;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  // #componentRef: ComponentRef<ModalComponent>;
  isShrunk = false;
  isMobile = false;
  onScroll() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.isShrunk = window.scrollY > 30;
    } else {
      this.isShrunk = window.scrollY > 50;
    }
  }
  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
    this.#router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((navEvent) => {
      console.log(navEvent);
    });
  }
  navigateToQuote(path) {
    this.#router.navigate([path]);
    this.isOpen.set(false);
  }
  navigateTo() {
    this.isOpen.set(true);
  }
  // onModalClose() {
  //   console.log('Destroy...');
  //   this.#componentRef.destroy()
  // }
  close(event) {
    this.isOpen.set(false);
  }
  onMenuOpen() {
    this.isOpen.set(true);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 43, vars: 7, consts: [[3, "close", "isOpen"], ["body", ""], [1, "modal-title", "mb-4", "d-flex", "flex-row", "justify-content-center", "gap-3", "mb-4", "flex-wrap"], [1, "d-flex", "flex-row", "justify-content-center", "gap-3", "mb-4", "flex-wrap", "mar-t-b"], [1, "btn", "btn-warning", "text-uppercase", "fw-bold", "quote-btn", "ft-13", 3, "click"], [1, "top-info-bar", "w-100", "text-white", "bg-dark", "shrink"], [1, "container-fluid", "d-flex", "justify-content-between", "align-items-center", "py-2", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-1"], [1, "fs-6"], ["href", "tel:8908908900", 1, "text-white", "text-decoration-none", "fw-semibold"], [1, "fw-semibold"], [1, "navbar", "navbar-expand-md", "navbar-light", "fixed-top", "shadow-sm", "apt-bg", "shrink", "transparent-navbar"], [1, "container-fluid", "d-flex", "justify-content-between", "align-items-center", "flex-nowrap"], ["routerLink", "/", 1, "navbar-brand", "apt-txt-color", "test-clip"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-warning", "text-uppercase", "fw-bold", "quote-btn", 3, "click"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarMenu", 1, "navbar-toggler", "btn", "btn-outline-dark", "d-md-none", "d-flex", "flex-column", "align-items-center", "menu-toggle-btn", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarMenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "px-3"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/about", 1, "nav-link", "apt-txt-color"], ["routerLinkActive", "active", "routerLink", "/faq", 1, "nav-link", "apt-txt-color"], ["routerLinkActive", "active", "routerLink", "/admin", 1, "nav-link", "apt-txt-color"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-modal", 0);
      \u0275\u0275listener("close", function HeaderComponent_Template_app_modal_close_0_listener($event) {
        return ctx.close($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "h5", 2);
      \u0275\u0275text(3, "Choose Your Quote Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_5_listener() {
        return ctx.navigateToQuote("junk");
      });
      \u0275\u0275text(6, " JUNK REMOVAl ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_7_listener() {
        return ctx.navigateToQuote("schedule/m");
      });
      \u0275\u0275text(8, " MOVING ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13, "\u{1F4F2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "span", 8);
      \u0275\u0275text(18, "\u{1F1E8}\u{1F1E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 10);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "nav", 11)(22, "div", 12)(23, "strong")(24, "a", 13);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_27_listener() {
        return ctx.navigateTo();
      });
      \u0275\u0275text(28, " Free Quote ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 16);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_29_listener() {
        return ctx.onMenuOpen();
      });
      \u0275\u0275elementStart(30, "span", 17);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 18)(33, "ul", 19)(34, "li", 20)(35, "a", 21);
      \u0275\u0275text(36, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li", 20)(38, "a", 22);
      \u0275\u0275text(39, "FAQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li", 20)(41, "a", 23);
      \u0275\u0275text(42, "Admin");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("isOpen", ctx.isOpen());
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.phoneNumber, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.appConstants.country);
      \u0275\u0275advance();
      \u0275\u0275classProp("shrink", ctx.isShrunk);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.appConstants.HAUL_MOVE);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isOpen());
    }
  }, dependencies: [RouterLink, RouterLinkActive, ModalComponent], styles: [`

nav.navbar[_ngcontent-%COMP%] {
  transition: all 0.3s ease;
  padding: 1rem 1rem;
}
nav.navbar.shrink[_ngcontent-%COMP%] {
  padding: 0.5rem 1rem;
}
nav.navbar.shrink[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 24px;
}
.apt-bg[_ngcontent-%COMP%] {
  background-color: #14624f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1019607843);
}
.apt-txt-color[_ngcontent-%COMP%], 
.apt-txt-color.active[_ngcontent-%COMP%] {
  color: rgb(255, 249, 249);
}
@media (max-width: 576px) {
  .quote-btn[_ngcontent-%COMP%] {
    padding: 0.3rem 0.75rem;
    font-size: 0.8rem;
    border-radius: 6px;
  }
  .menu-toggle-btn[_ngcontent-%COMP%] {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 6px;
  }
  .navbar-brand[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .navbar[_ngcontent-%COMP%] {
    padding: 0.5rem 0rem !important;
  }
}
.navbar-toggler-icon[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-toggler[_ngcontent-%COMP%] {
  border: 1px solid white;
  background-color: transparent;
  border-radius: 0.5rem;
}
.info_section[_ngcontent-%COMP%] {
  height: 10%;
  max-height: 10%;
  background-color: rgba(227, 227, 37, 0.425);
}
.top-info-bar[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  z-index: 1040;
  width: 100%;
  height: 40px;
}
nav.navbar[_ngcontent-%COMP%] {
  top: 40px !important;
  z-index: 1050;
}
/*# sourceMappingURL=header.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterLink, RouterLinkActive, ModalComponent], template: `<!-- Top Info Bar -->
     <app-modal [isOpen]="isOpen()" (close)="close($event)">
      <!-- <h5 header class="modal-title">Modal title</h5> -->
      <div body>
        <h5 class="modal-title mb-4 d-flex flex-row justify-content-center gap-3 mb-4 flex-wrap">Choose Your Quote Type</h5>
        <div class="d-flex flex-row justify-content-center gap-3 mb-4 flex-wrap mar-t-b">
          <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" (click)="navigateToQuote('junk')">
            JUNK REMOVAl
          </button>
          <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13" (click)="navigateToQuote('schedule/m')">
            MOVING
          </button>
        </div>
      </div>
      <!-- <div footer>
        <div class="d-flex flex-row justify-content-center gap-3 mb-4 flex-wrap mar-t-b">
                <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13">
                  JUNK REMOVAl QUOTE
                </button>
                <button class="btn btn-warning text-uppercase fw-bold quote-btn ft-13">
                  MOVING QUOTE
                </button>
              </div>
      </div> -->
    </app-modal>
<div class="top-info-bar w-100 text-white bg-dark shrink">
  <div class="container-fluid d-flex justify-content-between align-items-center py-2 flex-wrap">

    <div class="d-flex align-items-center gap-1">
      <span class="fs-6">\u{1F4F2}</span>
      <a href="tel:8908908900" class="text-white text-decoration-none fw-semibold">
        {{appConstants.phoneNumber}}
      </a>
    </div>

    <div class="d-flex align-items-center gap-1">
      <span class="fs-6">\u{1F1E8}\u{1F1E6}</span>
      <span class="fw-semibold"> {{appConstants.country}}</span>
    </div>
  </div>
</div>

<nav [class.shrink]="isShrunk" class="navbar navbar-expand-md navbar-light fixed-top shadow-sm apt-bg shrink transparent-navbar">
  <div class="container-fluid d-flex justify-content-between align-items-center flex-nowrap">
    <strong>
      <a class="navbar-brand apt-txt-color test-clip" routerLink="/">{{appConstants.HAUL_MOVE}}</a>
    </strong>
    <div class="d-flex align-items-center gap-2">
      <button class="btn btn-warning text-uppercase fw-bold quote-btn" (click)="navigateTo()">
        Free Quote
      </button>
      <button (click)="onMenuOpen()"
        class="navbar-toggler btn btn-outline-dark d-md-none d-flex flex-column align-items-center menu-toggle-btn"
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
        <span class="navbar-toggler-icon">{{isOpen()}}</span>
      </button>
      </div>
      </div>
      <!-- @if (isOpen()) { -->
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto px-3">
          <!-- <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/home"   [routerLinkActiveOptions]="{ exact: true }">Home</a></li> -->
          <!-- <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/services">Services</a></li> -->
          <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/about">About</a></li>
          <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/faq">FAQ</a></li>
          <!-- <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/contact">Contact</a></li> -->
          <li class="nav-item"><a class="nav-link apt-txt-color" routerLinkActive="active" routerLink="/admin">Admin</a></li>
        </ul>
      </div>
  <!-- } -->

</nav>

`, styles: [`/* src/app/landing-page/header/header.component.scss */
nav.navbar {
  transition: all 0.3s ease;
  padding: 1rem 1rem;
}
nav.navbar.shrink {
  padding: 0.5rem 1rem;
}
nav.navbar.shrink img {
  width: 24px;
}
.apt-bg {
  background-color: #14624f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1019607843);
}
.apt-txt-color,
.apt-txt-color.active {
  color: rgb(255, 249, 249);
}
@media (max-width: 576px) {
  .quote-btn {
    padding: 0.3rem 0.75rem;
    font-size: 0.8rem;
    border-radius: 6px;
  }
  .menu-toggle-btn {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 6px;
  }
  .navbar-brand {
    font-size: 1rem;
  }
  .navbar {
    padding: 0.5rem 0rem !important;
  }
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-toggler {
  border: 1px solid white;
  background-color: transparent;
  border-radius: 0.5rem;
}
.info_section {
  height: 10%;
  max-height: 10%;
  background-color: rgba(227, 227, 37, 0.425);
}
.top-info-bar {
  position: fixed;
  top: 0;
  z-index: 1040;
  width: 100%;
  height: 40px;
}
nav.navbar {
  top: 40px !important;
  z-index: 1050;
}
/*# sourceMappingURL=header.component.css.map */
`] }]
  }], null, { onScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/landing-page/header/header.component.ts", lineNumber: 13 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main_routing_section"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, FooterComponent, HeaderComponent], styles: ["\n\n.image_section[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n}\n.image_header[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  background-image:\n    linear-gradient(\n      to right,\n      #2196F3,\n      #E91E63);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n@media (max-width: 768px) {\n  .image_header[_ngcontent-%COMP%] {\n    font-size: 8px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .image_header[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n.image_subheader[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .image_subheader[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center;\n  }\n}\n.image_text_container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38%;\n  left: 64%;\n  transform: translate(-50%, -50%);\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .image_text_container[_ngcontent-%COMP%] {\n    top: 23%;\n    left: 62%;\n    padding: 0 1rem;\n  }\n}\n.main_routing_section[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, FooterComponent, HeaderComponent], template: '\n    <!-- <div class="image_text_container">\n        <div class="image_section">\n            <h2 class="image_header">Need help to Move and Clean Junk</h2>\n            <span class="image_subheader">Some Description here</span>\n        </div>\n    </div> -->\n    <!-- <main>\n        <router-outlet />\n    </main> -->\n \n    <app-header />\n\n    <div class="main_routing_section">\n        <router-outlet />\n    </div>\n    <app-footer />\n', styles: ["/* src/app/app.component.scss */\n.image_section {\n  color: #fff;\n  text-transform: uppercase;\n}\n.image_header {\n  display: block;\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  background-image:\n    linear-gradient(\n      to right,\n      #2196F3,\n      #E91E63);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n@media (max-width: 768px) {\n  .image_header {\n    font-size: 8px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .image_header {\n    font-size: 8px;\n  }\n}\n.image_subheader {\n  display: block;\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .image_subheader {\n    font-size: 14px;\n    text-align: center;\n  }\n}\n.image_text_container {\n  position: absolute;\n  top: 38%;\n  left: 64%;\n  transform: translate(-50%, -50%);\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .image_text_container {\n    top: 23%;\n    left: 62%;\n    padding: 0 1rem;\n  }\n}\n.main_routing_section {\n  min-height: 70vh;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map

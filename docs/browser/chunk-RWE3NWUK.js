import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-L2C4MEM5.js";

// src/app/faq/faq.component.ts
function FaqComponent_For_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r4);
  }
}
function FaqComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275domListener("click", function FaqComponent_For_4_Template_button_click_1_listener() {
      const \u0275$index_6_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(\u0275$index_6_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 4);
    \u0275\u0275repeaterCreate(6, FaqComponent_For_4_For_7_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const faq_r5 = ctx.$implicit;
    const \u0275$index_6_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275$index_6_r2 + 1, ". ", faq_r5.question, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activeIndex === \u0275$index_6_r2 ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeIndex === \u0275$index_6_r2);
    \u0275\u0275advance();
    \u0275\u0275repeater(faq_r5.answerLines);
  }
}
var FaqComponent = class _FaqComponent {
  activeIndex = null;
  toggle(index) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  faqs = [
    {
      question: "How does your pricing work for junk removal?",
      answerLines: [
        "We charge based on how much space your junk takes up in our truck.",
        "Our rates start at \xBC truck, with options for \xBD and full truckloads.",
        "For single items like appliances or furniture, we offer flat pricing based on the size and type of the item."
      ]
    },
    {
      question: "How much do you charge for moving services?",
      answerLines: [
        "Our moving service rates start at $125/hour, with a minimum of 1 hour.",
        "Final costs depend on factors like the number of items, type of property (apartment, house, basement), floor level, elevator access, and the distance between the two locations."
      ]
    },
    {
      question: "Do I need to be there during junk removal or moving?",
      answerLines: [
        `It's best if you can be there to walk us through what needs to be removed or moved.`,
        `But if you can't, just make sure we have access and clear instructions\u2014we\u2019ll take care of the rest.`
      ]
    },
    {
      question: "What kind of items do you remove?",
      answerLines: [
        "We haul away almost anything non-hazardous:",
        "\u2022 Furniture",
        "\u2022 Appliances",
        "\u2022 Electronics",
        "\u2022 Mattresses",
        "\u2022 BED FRAMES",
        "\u2022 Renovation debris",
        "\u2022 Yard waste",
        "\u2022 METALS",
        "\u2022 AND MANY MORE",
        "We also do full property cleanouts like basements, garages, rental units, and offices."
      ]
    },
    {
      question: "Do you recycle or donate items?",
      answerLines: [
        "Yes! If something is still in good shape, we do our best to donate or recycle instead of dumping it.",
        "We care about keeping waste out of the landfill whenever possible."
      ]
    },
    {
      question: "Can you handle stairs or apartment moves without an elevator?",
      answerLines: [
        "Yes, we do all types of moves\u2014apartments, basements, and multi-story homes.",
        "If your move involves stairs or no elevator access, just let us know when booking so we can plan the right number of movers and time."
      ]
    },
    {
      question: "Do you offer packing services?",
      answerLines: [
        "Yes, we can help with packing too!",
        "Just let us know in advance if you want packing or unpacking included in your moving service."
      ]
    },
    {
      question: "How do I book a service?",
      answerLines: [
        "You can easily book online or call us at 306-351-2192.",
        "Once we receive your request, we\u2019ll confirm the time and walk you through any extra details."
      ]
    },
    {
      question: "How do I cancel or reschedule my appointment?",
      answerLines: [
        "No worries\u2014just call us at 306-351-2192 if you need to cancel or change your booking.",
        "Please try to give us a heads-up as early as possible."
      ]
    },
    {
      question: "Can I get an exact price before you arrive?",
      answerLines: [
        "Not always. Because we price based on how much space your items take up in our truck\u2014or the time and complexity for moving\u2014we\u2019ll need to see everything in person.",
        "Once we arrive, we\u2019ll give you a clear, upfront quote before starting the job.",
        "For simple, one-item removals, we may be able to give you an estimated price in advance, but final pricing is always confirmed on-site."
      ]
    }
  ];
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 5, vars: 0, consts: [[1, "faq"], [1, "faq-item"], [1, "question", 3, "click"], [1, "icon"], [1, "answer"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "\u2753 Frequently Asked Questions (FAQ)");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(3, FaqComponent_For_4_Template, 8, 5, "div", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.faqs);
    }
  }, styles: ['\n\n.faq[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  font-family: "Segoe UI", sans-serif;\n  background: #fefefe;\n  border-radius: 12px;\n  box-shadow:\n    0px -4px 6px rgba(0, 0, 0, 0.1),\n    4px 0px 6px rgba(0, 0, 0, 0.1),\n    0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n.faq[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  color: #333;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 1rem 0;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  font-size: 1.125rem;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  color: #00796b;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]:hover {\n  color: #004d40;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #555;\n  transition: transform 0.2s;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease;\n  padding-left: 0.5rem;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 1.05rem;\n  color: #444;\n  line-height: 1.6;\n}\n.faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .answer.active[_ngcontent-%COMP%] {\n  max-height: 1000px;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .faq[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .faq[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .faq[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .faq[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=faq.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [], template: `<section class="faq">
    <h1>\u2753 Frequently Asked Questions (FAQ)</h1>
    @for (faq of faqs; track $index; let i = $index) {
    <div class="faq-item">
        <button class="question" (click)="toggle(i)">
            {{ i + 1 }}. {{ faq.question }}
            <span class="icon">{{ activeIndex === i ? '\u2212' : '+' }}</span>
        </button>
        <div class="answer" [class.active]="activeIndex === i">
            
            @for (line of faq.answerLines; track line) {
            <p>{{ line }}</p>
            }
        </div>
    </div>
    }
</section>`, styles: ['/* src/app/faq/faq.component.scss */\n.faq {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  font-family: "Segoe UI", sans-serif;\n  background: #fefefe;\n  border-radius: 12px;\n  box-shadow:\n    0px -4px 6px rgba(0, 0, 0, 0.1),\n    4px 0px 6px rgba(0, 0, 0, 0.1),\n    0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n.faq h1 {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  color: #333;\n}\n.faq .faq-item {\n  border-bottom: 1px solid #ddd;\n  padding: 1rem 0;\n}\n.faq .faq-item .question {\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  font-size: 1.125rem;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  color: #00796b;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.faq .faq-item .question:hover {\n  color: #004d40;\n}\n.faq .faq-item .question .icon {\n  font-size: 1.5rem;\n  color: #555;\n  transition: transform 0.2s;\n}\n.faq .faq-item .answer {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease;\n  padding-left: 0.5rem;\n}\n.faq .faq-item .answer p {\n  margin: 0.5rem 0;\n  font-size: 1.05rem;\n  color: #444;\n  line-height: 1.6;\n}\n.faq .faq-item .answer.active {\n  max-height: 1000px;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .faq {\n    padding: 1rem;\n  }\n  .faq h1 {\n    font-size: 1.6rem;\n  }\n  .faq .question {\n    font-size: 1rem;\n  }\n  .faq .answer p {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=faq.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/faq/faq.component.ts", lineNumber: 9 });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-RWE3NWUK.js.map

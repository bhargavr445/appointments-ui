import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  faqs = [
    {
      question: 'How does your pricing work for junk removal?',
      answerLines: [
        'We charge based on how much space your junk takes up in our truck.',
        'Our rates start at ¼ truck, with options for ½ and full truckloads.',
        'For single items like appliances or furniture, we offer flat pricing based on the size and type of the item.',
      ],
    },
    {
      question: 'How much do you charge for moving services?',
      answerLines: [
        'Our moving service rates start at $125/hour, with a minimum of 1 hour.',
        'Final costs depend on factors like the number of items, type of property (apartment, house, basement), floor level, elevator access, and the distance between the two locations.',
      ],
    },
    {
      question: 'Do I need to be there during junk removal or moving?',
      answerLines: [
        `It's best if you can be there to walk us through what needs to be removed or moved.`,
        `But if you can't, just make sure we have access and clear instructions—we’ll take care of the rest.`,
      ],
    },
    {
      question: 'What kind of items do you remove?',
      answerLines: [
        'We haul away almost anything non-hazardous:',
        '• Furniture',
        '• Appliances',
        '• Electronics',
        '• Mattresses',
        '• BED FRAMES',
        '• Renovation debris',
        '• Yard waste',
        '• METALS',
        '• AND MANY MORE',
        'We also do full property cleanouts like basements, garages, rental units, and offices.',
      ],
    },
    {
      question: 'Do you recycle or donate items?',
      answerLines: [
        'Yes! If something is still in good shape, we do our best to donate or recycle instead of dumping it.',
        'We care about keeping waste out of the landfill whenever possible.',
      ],
    },
    {
      question: 'Can you handle stairs or apartment moves without an elevator?',
      answerLines: [
        'Yes, we do all types of moves—apartments, basements, and multi-story homes.',
        'If your move involves stairs or no elevator access, just let us know when booking so we can plan the right number of movers and time.',
      ],
    },
    {
      question: 'Do you offer packing services?',
      answerLines: [
        'Yes, we can help with packing too!',
        'Just let us know in advance if you want packing or unpacking included in your moving service.',
      ],
    },
    {
      question: 'How do I book a service?',
      answerLines: [
        'You can easily book online or call us at 306-351-2192.',
        'Once we receive your request, we’ll confirm the time and walk you through any extra details.',
      ],
    },
    {
      question: 'How do I cancel or reschedule my appointment?',
      answerLines: [
        'No worries—just call us at 306-351-2192 if you need to cancel or change your booking.',
        'Please try to give us a heads-up as early as possible.',
      ],
    },
    {
      question: 'Can I get an exact price before you arrive?',
      answerLines: [
        'Not always. Because we price based on how much space your items take up in our truck—or the time and complexity for moving—we’ll need to see everything in person.',
        'Once we arrive, we’ll give you a clear, upfront quote before starting the job.',
        'For simple, one-item removals, we may be able to give you an estimated price in advance, but final pricing is always confirmed on-site.',
      ],
    },
  ];
}

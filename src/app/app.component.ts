import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plans-11-10-23';
  plans = [
    {
      plan: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          isEnabled: true
        },
        {
          name: "5GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false
        },
        {
          name: "Free Subdomain",
          isEnabled: false
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        },
      ]
    },
    {
      plan: "Plus",
      price: 9,
      features: [
        {
          name: "5 Users",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        },
      ]
    },
    {
      plan: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true
        },
        {
          name: "150GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Unlimited Free Subdomains",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true
        },
      ]
    }
  ];
}



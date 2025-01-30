import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { QualityComponent } from "../quality/quality.component";
import { SkillComponent } from "../skill/skill.component";
import { ServiceComponent } from "../service/service.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ReviewComponent } from "../review/review.component";
import { BlogComponent } from "../blog/blog.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, QualityComponent, SkillComponent, ServiceComponent, PortfolioComponent, ReviewComponent, BlogComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

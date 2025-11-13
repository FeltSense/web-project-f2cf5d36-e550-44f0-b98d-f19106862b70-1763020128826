# TechBusiness Website - Project Context

## Project Overview
A modern, professional website for TechBusiness - a technology solutions company targeting general consumers with enterprise-grade services.

## Brand Identity
- **Name:** TechBusiness
- **Industry:** Technology Solutions
- **Target Audience:** General consumers seeking professional tech services
- **Style:** Modern, professional, trustworthy

## Design Decisions

### Color Palette
- **Primary:** Blue (#2563eb) - Represents trust, professionalism, and technology
- **Secondary:** Cyan/Light Blue - Modern, innovative feel
- **Neutral:** Grays and white for clean, professional appearance
- **Rationale:** Blue is the standard for tech/business industries, conveying reliability and expertise

### Typography
- **Headings:** Poppins (700-800 weight) - Bold, modern, professional
- **Body:** Inter - Highly readable, clean, contemporary
- **Sizes:** Large headings (text-5xl to text-7xl) for impact and hierarchy

### Layout Approach

#### Hero Section
- Full-bleed background image with gradient overlay
- Large, impactful typography
- Clear value proposition
- Dual CTA buttons (primary and secondary)
- **Rationale:** Immediate visual impact with professional photography establishes credibility

#### Services Section
- 3-column grid layout
- Icon + Title + Description cards
- Consistent spacing and shadows
- Hover effects for interactivity
- **Rationale:** Clean grid provides clarity and easy scanning of offerings

#### Team Section (Testimonials)
- Carousel layout with auto-rotation
- Profile photos, names, roles, and bios
- Star ratings for credibility
- Responsive indicators
- **Rationale:** Different from services layout, carousel handles 6+ team members elegantly

#### Pricing Section
- Single, comprehensive plan presentation
- Feature checklist with icons
- Trust badges
- Prominent Stripe CTA
- **Rationale:** Simplified pricing reduces decision fatigue for consumers

#### Contact Form
- Split layout: Info + Form
- Clean, accessible form fields
- Visual feedback for submission states
- Contact details with icons
- **Rationale:** Two-column layout provides context while collecting information

## Technical Implementation

### Framework
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Key Features
1. **Sticky Navigation:** Smooth scrolling, transparent-to-solid on scroll
2. **Responsive Design:** Mobile-first approach, breakpoints at md/lg
3. **Form Integration:** POST to API with hidden founder/project IDs
4. **Payment Integration:** Stripe checkout link
5. **Animations:** Smooth transitions, hover effects, carousel auto-rotation

### Performance Optimizations
- Optimized images from Unsplash
- Minimal JavaScript for interactions
- Efficient Tailwind utilities
- Semantic HTML structure

## Content Strategy

### Messaging Hierarchy
1. **Hero:** Innovation + Excellence = immediate value proposition
2. **Services:** Comprehensive solution offerings
3. **Team:** Human element, expertise showcase
4. **Pricing:** Simple, transparent, accessible
5. **Contact:** Multiple touchpoints, easy engagement

### Trust Building
- Professional photography
- Team profiles with credentials
- Security/support badges
- Clear contact information
- Money-back guarantee

## API Integration

### Form Submission Endpoint
```
POST https://deep-api-server-2moiw.kinsta.app/api/form-submissions
```

### Required Fields
- name (string)
- email (string)
- phone (string)
- message (string)
- founder_id (hidden)
- project_id (hidden)

### Payment Link
```
https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
```
- Price: $29/month
- Test mode enabled

## Future Enhancements
- Blog/resources section
- Case studies showcase
- Client portal login
- Live chat integration
- Multi-language support
- Advanced analytics tracking

## Deployment Notes
- Ensure environment variables are set
- Replace placeholder IDs in contact form
- Test Stripe integration in production
- Optimize images for production
- Enable analytics/monitoring

## Maintenance
- Regular content updates
- Team profile refreshes
- Service offerings updates
- Security patches
- Performance monitoring
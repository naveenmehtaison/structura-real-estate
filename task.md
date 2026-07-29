```text
Task: Customize the real estate website to represent an Uttarakhand-based property business. Make the changes across the entire project while keeping the existing design, layout, responsiveness, and functionality intact unless explicitly mentioned below.

Project Context:
- The website focuses on buying and selling land across Uttarakhand.
- The company has 5+ years of experience in the real estate industry.
- Keep all changes consistent throughout the website.

Required Changes

1. Branding
- Replace every occurrence of "Structura" with:
  **हिमालय होम्स**
- Create a clean, professional logo for "हिमालय होम्स" that suits a real estate company based in Uttarakhand.
- Replace the existing logo everywhere it appears (header, footer, favicon if applicable, etc.).

2. Homepage
- Replace the current hero tagline with:
  **निर्माण में भरोसा, निवास में सुकून**
- Ensure the typography and spacing match the existing design.

3. Property Data
- For now, update every property's location to:
  **Pithoragarh, Uttarakhand**
- Ensure this is reflected consistently across:
  - Property cards
  - Property details pages
  - Search/filter results
  - Any related sections

4. Currency
- Remove every dollar ($) symbol from the website.
- Replace all prices with the Indian Rupee symbol (₹).
- Keep number formatting appropriate for Indian users wherever possible.

5. Dummy Data
- Replace all English labor/staff/owner/agent names with realistic Indian Hindu names.
- Maintain consistency across cards, testimonials, property details, contact information, etc.

6. Company Information
- Update company/about information to mention:
  - The company specializes in land across Uttarakhand.
  - 5+ years of experience in the industry.
- Update any hardcoded descriptions accordingly.

7. Property Filters
Page:
https://structura-real-estate.vercel.app/properties

- Investigate why the property filter buttons are not working.
- Fix the filtering functionality without changing the UI.
- Ensure all existing filters work correctly and update the property list dynamically.

8. Sold Properties
- On the Sold Properties page, implement the missing "View Details" functionality.
- Clicking "View Details" should navigate to the appropriate property details page.
- Reuse the existing property details page if available instead of creating a new implementation.

Implementation Guidelines
- Make minimal, clean changes.
- Reuse existing components wherever possible.
- Do not break existing layouts or responsiveness.
- Do not introduce unnecessary refactoring.
- Keep the codebase clean and consistent.
- If any data is hardcoded in multiple places, centralize it where appropriate without affecting functionality.

Acceptance Criteria
- Website branding is updated to "हिमालय होम्स".
- Professional logo is displayed everywhere.
- Homepage tagline is updated.
- All property prices display ₹ instead of $.
- All property locations are set to Pithoragarh, Uttarakhand.
- English placeholder names are replaced with Indian Hindu names.
- Company information reflects 5+ years of experience and Uttarakhand land specialization.
- Property filters work correctly.
- Sold property cards have a working "View Details" action.
- No existing functionality is broken, and the UI remains visually consistent.
```

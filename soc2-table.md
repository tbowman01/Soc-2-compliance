| TSC ID   | Control Title               | Expected Evidence                                                      | Implementation Notes                                           | Status      |
|:---------|:----------------------------|:-----------------------------------------------------------------------|:---------------------------------------------------------------|:------------|
| CC1.1    | Control Environment         | Code of Conduct, Ethics Policy, Org Chart                              | Policies signed by staff, roles reviewed annually              | Planned     |
| CC1.2    | Board Oversight             | Board meeting minutes, org chart, audit committee charter              | Quarterly meetings with board security oversight               | In Progress |
| CC3.1    | Logical Access Controls     | IAM policies, MFA enforcement logs, access reviews                     | IAM automation via Okta + GitHub SSO                           | Implemented |
| CC4.1    | Change Management           | GitHub PR templates, CI logs, deployment records                       | Protected branches, peer review enforcement, Trunk-based CI/CD | Implemented |
| PI1.6    | Disclosure and Notification | Breach response policy, incident log template, communication procedure | Using Drata integration with PagerDuty + legal review          | Not Started |

TODO: 
 - If you’re preparing for SOC 2 compliance:
 - You should use the full AICPA Trust Services Criteria document.
 - Then map each criterion to your actual control implementation.
 - Optionally align them to other frameworks (e.g., NIST 800-53, ISO 27001, CIS) using crosswalks.

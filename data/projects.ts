export type Project = {
  slug: string
  title: string
  summary: string
  problem: string
  solution: string
  tools: string[]
  tags: string[]
  steps: string[]
  impact: { label: string; value: string }[]
  premiumNotes: string[]
}

export const TAGS = [
  'Lead Gen',
  'AI',
  'Voice',
  'CRM',
  'Operations',
  'Proposals',
  'Reporting',
] as const

export const projects: Project[] = [
  {
    slug: 'lead-qualifier-voice-proposal',
    title: 'Lead Qualifier + Research + Voice Agent + Proposal Automation',
    summary:
      'End-to-end lead intake, AI scoring, research enrichment, follow-up, and automatic proposal creation.',
    problem:
      'Teams lose high-intent leads because qualification is manual, slow, and inconsistent. Proposal turnaround takes days, and follow-up is often late.',
    solution:
      'A Make-based system that scores leads with AI, enriches them with research, routes outcomes, triggers follow-ups, and generates PandaDoc proposals in minutes.',
    tools: ['Make', 'Airtable', 'OpenAI', 'HTTP/APIs', 'Text Parser', 'JSON', 'PandaDoc', 'Gmail', 'Slack', 'Vapi'],
    tags: ['Lead Gen', 'AI', 'Voice', 'Proposals', 'CRM'],
    steps: [
      'New lead enters Airtable (trigger)',
      'AI analyzes intent, urgency, and quality',
      'Text parsing converts AI output into structured fields',
      'HTTP enrichment: company/website/context signals',
      'Router splits qualified vs non-qualified flows',
      'Qualified: AI drafts proposal content',
      'JSON formatting prepares document-ready fields',
      'PandaDoc generates proposal and returns a shareable link',
      'Slack/Gmail notifications fire instantly',
      'Optional: Vapi voice agent calls for verbal qualification',
    ],
    impact: [
      { label: 'Qualification time', value: '↓ ~80% (est.)' },
      { label: 'Proposal delivery', value: 'Days → Minutes' },
      { label: 'Response speed', value: 'Immediate routing' },
    ],
    premiumNotes: [
      'Built with routing logic, clean data shaping, and audit-friendly records in Airtable.',
      'Designed for scale: modular steps, reusable prompts, and clear fallbacks.',
      'Client-ready outputs: structured qualification notes + branded proposal documents.',
    ],
  },
  {
    slug: 'crm-auto-pipeline',
    title: 'CRM Auto-Pipeline Builder',
    summary:
      'Automatically dedupe, assign owners, and move leads through stages with reminders and SLA tracking.',
    problem:
      'Leads arrive from multiple channels and get duplicated, unassigned, or stuck without follow-up.',
    solution:
      'A pipeline automation that normalizes lead data, deduplicates entries, assigns owners, sets next actions, and sends reminders based on SLAs.',
    tools: ['Make', 'Airtable or HubSpot', 'Webhooks', 'Gmail', 'Slack'],
    tags: ['CRM', 'Lead Gen', 'Operations'],
    steps: [
      'Capture from forms, emails, or ads via webhook',
      'Normalize + dedupe using email/domain matching',
      'Auto-assign owner based on rules (territory, round-robin, workload)',
      'Create tasks + reminders and update stage timestamps',
      'Escalate stalled leads to Slack after SLA thresholds',
    ],
    impact: [
      { label: 'Dedupe accuracy', value: 'Higher data trust' },
      { label: 'Follow-up rate', value: 'Up (est.)' },
      { label: 'Lead leakage', value: 'Down (est.)' },
    ],
    premiumNotes: [
      'SLA-aware reminders reduce leakage without manual chasing.',
      'Audit logs show exactly when stages changed and why.',
    ],
  },
  {
    slug: 'client-onboarding',
    title: 'Client Onboarding Automation',
    summary:
      'Form → folder creation → welcome email → checklist tasks → internal notification.',
    problem:
      'Onboarding is inconsistent: missing docs, delayed welcomes, and unclear next steps.',
    solution:
      'A guided onboarding workflow that creates structure instantly and keeps both client and team aligned.',
    tools: ['Make', 'Google Drive', 'Docs', 'Gmail', 'Slack', 'Airtable'],
    tags: ['Operations', 'CRM'],
    steps: [
      'Client intake form submission triggers workflow',
      'Create folders + templates (proposal, scope, kickoff doc)',
      'Send welcome email with next steps + scheduling link',
      'Create internal checklist tasks and assign owners',
      'Notify Slack with onboarding summary',
    ],
    impact: [
      { label: 'Onboarding time', value: 'Hours → Minutes' },
      { label: 'Consistency', value: 'Standardized' },
      { label: 'Client experience', value: 'Premium' },
    ],
    premiumNotes: [
      'Reduces back-and-forth and sets a professional first impression.',
      'Templates ensure repeatable delivery quality.',
    ],
  },
  {
    slug: 'invoicing-payment-followup',
    title: 'Invoicing & Payment Follow-up System',
    summary:
      'Automatic invoice sending, reminders, payment status updates, and weekly finance reports.',
    problem:
      'Late payments hurt cashflow and follow-ups waste time.',
    solution:
      'Automated reminders and status updates that keep finance clean and predictable.',
    tools: ['Make', 'Stripe or Paystack', 'Gmail', 'Google Sheets or Airtable', 'Slack'],
    tags: ['Operations', 'Reporting'],
    steps: [
      'Invoice created triggers reminder schedule',
      'Send polite reminders based on due date',
      'Update status when payment arrives',
      'Weekly cashflow summary to email/Slack',
    ],
    impact: [
      { label: 'Cashflow', value: 'More predictable' },
      { label: 'Follow-up time', value: 'Lower' },
      { label: 'Reporting', value: 'Automated' },
    ],
    premiumNotes: [
      'Tone-safe reminders protect client relationships.',
      'A single source of truth for paid/unpaid status.',
    ],
  },
  {
    slug: 'kpi-reporting-dashboard',
    title: 'KPI Reporting & Executive Dashboards',
    summary:
      'Daily/weekly KPI summaries delivered to Slack/email and stored for trend tracking.',
    problem:
      'Leaders lack visibility across sales, ops, and support without manual reporting.',
    solution:
      'Automated KPI aggregation with clear summaries and trend-friendly storage.',
    tools: ['Make', 'Google Sheets', 'Slack', 'Gmail', 'APIs'],
    tags: ['Reporting', 'Operations'],
    steps: [
      'Pull metrics from multiple sources via APIs',
      'Normalize + calculate KPIs',
      'Send executive summary with highlights and flags',
      'Store snapshots for trends',
    ],
    impact: [
      { label: 'Reporting time', value: 'Near-zero' },
      { label: 'Decision speed', value: 'Faster' },
      { label: 'Visibility', value: 'High' },
    ],
    premiumNotes: [
      'Exec-style summaries: what changed, why it matters, what to do next.',
      'Alerts highlight anomalies without noise.',
    ],
  },
  {
    slug: 'support-ai-triage',
    title: 'Customer Support AI Triage',
    summary:
      'Incoming messages classified with AI and routed with suggested replies and priority.',
    problem:
      'Support queues get flooded and urgent issues are missed.',
    solution:
      'AI classification + routing that surfaces urgency and provides ready-to-send replies.',
    tools: ['Make', 'Gmail', 'OpenAI', 'Slack', 'Airtable'],
    tags: ['AI', 'Operations'],
    steps: [
      'Inbound email triggers classification',
      'AI assigns intent, urgency, and category',
      'Route to correct team/channel',
      'Attach suggested response templates',
    ],
    impact: [
      { label: 'Triage speed', value: 'Minutes → Seconds' },
      { label: 'Escalations', value: 'More reliable' },
      { label: 'Consistency', value: 'Up' },
    ],
    premiumNotes: [
      'Human-in-the-loop option for sensitive cases.',
      'Clear priority rules reduce missed urgent issues.',
    ],
  },
  {
    slug: 'inventory-reorder-alerts',
    title: 'Inventory & Reorder Automation',
    summary:
      'Stock recalculation, low-stock alerts, supplier messaging, and reorder tracking.',
    problem:
      'Retailers lose sales due to stockouts and poor reorder visibility.',
    solution:
      'Automated stock monitoring and reorder prompts that keep shelves stocked.',
    tools: ['Make', 'Google Sheets or Airtable', 'Gmail/WhatsApp', 'Slack'],
    tags: ['Operations', 'Reporting'],
    steps: [
      'Sales updates adjust stock levels',
      'Threshold triggers reorder alerts',
      'Supplier message is generated and sent',
      'Reorder status tracked with ETA reminders',
    ],
    impact: [
      { label: 'Stockouts', value: 'Reduced' },
      { label: 'Time spent', value: 'Lower' },
      { label: 'Reorder clarity', value: 'Higher' },
    ],
    premiumNotes: [
      'Designed for real ops: thresholds, ETAs, and audit trails.',
      'Extensible to barcode + POS integration.',
    ],
  },
  {
    slug: 'appointment-followups',
    title: 'Appointment Booking + Follow-ups',
    summary:
      'Booking confirmations, reminders, no-show recovery, and review requests after service.',
    problem:
      'No-shows and weak follow-up reduce revenue for service businesses.',
    solution:
      'Automated scheduling workflow that increases attendance and repeat business.',
    tools: ['Make', 'Calendly', 'Gmail', 'WhatsApp', 'Google Sheets or Airtable'],
    tags: ['Lead Gen', 'Operations'],
    steps: [
      'Booking triggers confirmation and calendar entry',
      'Reminders sent at configured intervals',
      'No-show triggers recovery follow-up',
      'Post-appointment review request sent',
    ],
    impact: [
      { label: 'No-shows', value: 'Down (est.)' },
      { label: 'Reviews', value: 'Up (est.)' },
      { label: 'Repeat bookings', value: 'Up (est.)' },
    ],
    premiumNotes: [
      'Client-friendly messaging and timing controls.',
      'Segmented flows for new vs returning clients.',
    ],
  },
  {
    slug: 'ops-notifications-escalations',
    title: 'Internal Ops Notification & Escalation System',
    summary:
      'Event-driven alerts, escalation rules, and audit logging for critical operations.',
    problem:
      'Operational issues get noticed late and accountability becomes unclear.',
    solution:
      'A structured notification and escalation framework integrated into everyday workflows.',
    tools: ['Make', 'Slack', 'Airtable', 'Gmail', 'Webhooks'],
    tags: ['Operations', 'Reporting'],
    steps: [
      'Critical events trigger alerts',
      'Escalation rules apply if not acknowledged',
      'All actions are logged for auditing',
      'Weekly ops digest highlights recurring issues',
    ],
    impact: [
      { label: 'Response time', value: 'Faster' },
      { label: 'Accountability', value: 'Clear' },
      { label: 'Reliability', value: 'Higher' },
    ],
    premiumNotes: [
      'Reduces operational risk with clear escalation paths.',
      'Makes systems feel “self-monitoring”.',
    ],
  },
]

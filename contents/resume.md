# Seiya Izumi

Senior Fullstack Engineer · Frontend-focused · React · TypeScript · Scala

[linkedin.com/in/izumisy](https://linkedin.com/in/izumisy) · [github.com/IzumiSy](https://github.com/IzumiSy) · [about.izumisy.work](https://about.izumisy.work/) · Chiba, Japan

---

## Summary

Started writing C at 10 — not for school, just for fun.

I gravitate toward the work behind the work: observing how teams struggle with integration pain, then encoding the solution once into SDKs, conventions, and tooling so nobody has to solve it again. Domain-specific products are fine, but what genuinely excites me is building the platform layer that backs other builders — the infrastructure, frameworks, and developer experience that multiply everyone else's output.

I love leveraging type systems (Elm, Scala, TypeScript) to raise quality and DX — including for AI-assisted workflows. Functional programming in Elm and Scala sharpened how I think about structure and composition, but TypeScript is the tool that fits my hand best now.

---

## Experience

### Frontend Platform Engineer
**Tailor** · Remote, Japan · Feb 2025 – Present

- Architected AppShell, a multi-tenant ERP frontend framework where a single declarative config drives sidebar, breadcrumbs, command palette, and route guards simultaneously; eliminating an entire class of silent integration bugs that hand-wired approaches produce and can't reliably test.
- Grew AppShell from a solo initiative into a team; authored the design-philosophy document (coupling over flexibility, convention over configuration) that sets architectural direction others build against; drove AppShell's adoption as the technical foundation for the entire Professional Services org.
- Maintained tight feedback loops with consuming teams across APAC, translating real ERP delivery pain into API and DX improvements.

> **AppShell** — Opinionated React framework for multi-tenant ERP apps on Tailor Platform. Provides authentication, file-based routing, sidebar navigation, command palette, responsive layouts, and reusable ERP components out of the box. Ships as a monorepo with a core library (`@tailor-platform/app-shell`) and a Vite plugin for file-based routing.  
> [github.com/tailor-platform/app-shell](https://github.com/tailor-platform/app-shell)

### Platform Enabling Engineer, Frontend Focused
**Tailor** · Remote, Japan · Dec 2023 – Feb 2025

- Prototyped and shipped tooling to improve developer productivity across the Professional Services org, including contributions to fabrix-framework/fabrix (open-source) and frontend SDK, design system, and codegen initiatives.
- Established frontend conventions adopted across the PS team; acted as the technical bridge between platform capabilities and customer-facing delivery.

> **Fabrix** — Framework for building React apps backed by GraphQL. Write only GraphQL queries and let Fabrix render the UI with a pluggable component registry. Ships with ready-made component packages (Chakra UI, etc.). The concept was sound but arrived ahead of the ecosystem's readiness; lessons from Fabrix fed directly into AppShell's more fundamental, convention-driven approach.  
> [github.com/fabrix-framework/fabrix](https://github.com/fabrix-framework/fabrix)

### Tech Lead, Product Engineering (POC / Platform)
**Tailor** · Remote, Japan · Dec 2022 – Jul 2024

- Technical lead on a 1-year+ SAP replacement engagement for a large Japanese textile manufacturer, replacing order management and inventory systems while acting simultaneously as a demanding internal consumer of Tailor Platform.
- Identified that the majority of screens followed repeating CRUD patterns; scratch-built a screen-generation tool and project-specific CLI to eliminate the boilerplate cost, cutting build effort for more than half the screens substantially.
- These prototypes became the direct seed of Fabrix; the engagement is where I was both the producer (shipping the customer system) and the consumer (feeling the platform's gaps), which shaped the API design philosophy for the framework.

### Software Engineer (Side Project)
**Rimo LLC.** · Tokyo, Japan · Oct 2021 – Dec 2022

- Diagnosed and redesigned a Go audio-transcription worker on GCP Cloud Run that was repeatedly OOM-killed; root cause confirmed via Cloud Trace: wav files loaded whole into memory, compounded by concurrent ffmpeg processes per task.
- Replaced the load-everything architecture with a streaming pipeline: mp4 demuxed and decoded incrementally via fdk-aac/cgo, piped directly to the transcription API, with peak memory decoupled from file size entirely.
- Result: OOM crashes eliminated at a lower memory allocation (reduced cost); transcription accuracy improved as a side effect (streaming a continuous signal removed utterance-chopping at chunk boundaries).

> **Streaming transcription pipeline walkthrough** — Detailed write-up on replacing a load-everything architecture with incremental demux/decode streaming, eliminating OOM crashes and the parameter tug-of-war that came with them.  
> [dev.to/izumisy/curing-a-transcription-worker-that-kept-dying-on-cloud-run-with-streaming-bpm](https://dev.to/izumisy/curing-a-transcription-worker-that-kept-dying-on-cloud-run-with-streaming-bpm)

### Software Engineer / Web Frontend Specialist
**Unipos** · Tokyo, Japan · Apr 2022 – Nov 2022

- Overhauled CI/CD pipeline and code-review process, achieving a 10× improvement in frontend release velocity.
- Automated development workflows with GitHub Actions (ChatOps, IssueOps), enabling extremely high-frequency product iteration.

### Lead Software Engineer
**Unipos** · Tokyo, Japan · Apr 2020 – Apr 2022

- Led two cross-functional teams (3–4 members each) across web and mobile, owning the full cycle from stakeholder alignment and requirements scoping through system design, implementation, code review, and release.
- Acted as the primary technical interface with business stakeholders: translated product goals into engineering plans, managed expectations, and drove decisions across the stack.
- Led pre-sales technical support; built an automation tool to detect integration blockers early, cutting pre-contract lead time by 10–20%.
- Delivered a one-year product rebranding project as PM, coordinating 7–8 engineers and designers end-to-end.
- Created an open-source Elm package to streamline concurrent async loading patterns used across the product.

> **elm-multi-waitable** — Elm package for managing multiple asynchronous loading states in a type-safe way. Acts like a traffic light: fires a single completion message only when all parallel fetches have resolved.  
> [github.com/IzumiSy/elm-multi-waitable](https://github.com/IzumiSy/elm-multi-waitable)

### Software Engineer
**Unipos** · Tokyo, Japan · Apr 2018 – Apr 2020

- Fullstack development (Scala + Go backend, Elm + TypeScript frontend) on Google Cloud Platform.
- Owned the full cycle from High Level Design docs through API specification and implementation.
- Speaker: WebSummit 2018 (Lisbon), elm Europe 2019 (Paris), DeveloperWeek 2020 (San Francisco), Elm Meetup Tokyo 2019.

---

## Skills

**Frontend:** React · TypeScript · GraphQL (Relay, urql, gql.tada) · Next.js · Vite · Tailwind CSS · Playwright

**Backend:** Scala · Go · Node.js · Ruby (Rails/Sinatra) · PostgreSQL · Redis · REST & GraphQL APIs

**Platform:** Google Cloud Platform · GKE · Docker · GitHub Actions · CircleCI · Firebase

**Languages:** TypeScript · Scala · Go · JavaScript · Ruby · Elm · ShellScript · C

**Practices:** Multi-tenant platform design · End-to-end ownership · DDD · CI/CD · AI-assisted development

---

## Education

**B.A. in English & American Culture, Communication**
Musashi University · Tokyo, Japan · 2013 – 2018

---

## Selected Highlights

- Conference Speaker: elm Europe 2019 (Paris) · DeveloperWeek 2020 (San Francisco) · Elm Meetup Tokyo 2019

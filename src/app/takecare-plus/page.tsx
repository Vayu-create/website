// app/takecare-plus/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TakeCare+ — AI Thinking Partner for Safer Healthcare | Sarthak Dangwal',
  description:
    'TakeCare+ is a multilingual, ambient AI thinking partner that helps Indian clinicians reduce errors of omission, improve continuity of care, and generate ABDM-compliant records.',
  openGraph: {
    type: 'article',
    title: 'TakeCare+ — AI Thinking Partner for Safer Healthcare',
    description:
      'A multilingual, ambient AI system that supports clinical reasoning, reduces preventable errors, and creates ABDM-compliant records for India’s health stack.',
    url: 'https://sarthakdangwal.com/takecare-plus',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TakeCare+ — AI Thinking Partner for Safer Healthcare',
    description:
      'Ambient AI that helps doctors think better under pressure and produces ABDM-compliant records for the UHI.',
  },
}

export default function TakeCarePlusPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation */}
        <div className="w-full pb-6 sm:pb-12">
          <div className="flex justify-start items-center max-w-2xl mx-auto">
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Projects
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Title */}
          <h1 className="mb-8 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            TakeCare+ <br/>
            AI Thinking Partner for Safer Healthcare
          </h1>

                     {/* Hero Image Slot */}
           <div className="my-8">
             <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
               <Image
                 src="/takecare/takecarehero.png" // replace with your asset
                 alt="TakeCare+"
                 fill
                 className="object-cover"
                 priority
               />
             </div>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Ambient assistance for high-pressure, multilingual clinics.
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            {/* The Problem */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">The Problem</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  India has one of the most heavily burdened medical workforces in the world. Estimates of the national doctor–patient ratio range from 1:834 to 1:1700. At face value, these numbers may not appear alarming, but national averages obscure the underlying inequities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The central issue is distribution. Physicians are concentrated in urban centers, while rural regions remain severely underserved. Studies indicate an urban-to-rural disparity of nearly 4:1. In Jharkhand, for example, approximately 10,000 physicians are responsible for a population of more than 32 million.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This imbalance produces unmanageable patient queues and excessively long shifts. Physicians frequently skip meals, compromise on best practices, and push themselves beyond safe limits simply to meet demand. The cumulative toll on health is severe: in India, physicians on average die nearly ten years earlier than the general population, underscoring the unsustainability of current workloads.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The consequences extend beyond physician well-being. Fatigue is strongly correlated with error rates, with exhausted doctors being twice as likely to make mistakes. India records an estimated 5.2 million medication errors annually, contributing to hundreds of thousands of preventable deaths.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The operational realities within Tier-2 and Tier-3 clinics illustrate the structural fragility of care delivery. Electronic medical records are rare. Diagnoses and prescriptions are typically handwritten on slips of paper, leaving no durable record and little continuity of care. Consultations often last only three to seven minutes in order to manage patient volume. Critical questions are left unasked. Allergies and past histories are confirmed verbally, if at all. Patients provide fragmented recollections. Prescriptions, written hastily, are handed to chemists who must interpret the handwriting before dispensing medication, a process that is accurate in some cases but dangerously flawed in others.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Despite this, official data on adverse drug reactions (ADRs) in India does not reflect the true scale of the problem. This is not due to lower incidence but rather to chronic under-reporting. India&apos;s ADR reporting rate is estimated at less than 1%, compared to a global average of approximately 5%. This does not indicate fewer ADRs, but rather highlights significant under-reporting and the absence of systematic pharmacovigilance, especially in overburdened, resource-constrained settings.
                </p>
              </div>
            </section>

            {/* Image after Problem */}
            <div className="my-12">
              <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/takecare/takecareprob.png"
                  alt="Problem at a glance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Why Existing Tools Don't Work */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Why Existing Tools Do Not Work
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The intuitive fix is digitization. Replace paper with software. In practice, most
                  systems slow doctors down. They add clicks and fields that consume the few minutes
                  available for each visit. Many physicians who tried these platforms returned to pen
                  and paper because the software made care less efficient.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Transcription tools help capture conversations but are often built for English-first,
                  Tier-1 hospitals. They break in multilingual, code-switched clinics where doctors and
                  patients move between Hindi, English, and regional languages in a single visit. Even
                  when transcription works, it addresses only part of the problem. It can reduce errors
                  of commission such as documenting the wrong dose or confusing two drugs. It does not
                  address errors of omission such as the question never asked, the test never ordered,
                  or the guideline not recalled. A transcript captures what was said. It cannot prompt
                  what was not.
                </p>
              </div>
            </section>

            {/* How TakeCare+ Differs */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                How TakeCare+ Differs
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  TakeCare+ is a multilingual, ambient AI thinking partner. It helps physicians generate
                  structured electronic medical records and supports diagnostic and prescribing
                  decisions with reference to medical history, geographic trends, and current evidence.
                  It is designed to mitigate errors of omission by identifying gaps in clinical
                  reasoning and providing an additional safeguard for both physicians and patients.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                  <li>
                    Highlights follow-ups that should be pursued: <em>&quot;Travel history?&quot;</em> during
                    fever season.
                  </li>
                  <li>
                    Recalls important past details: <em>&quot;Avoid NSAIDs, gastrointestinal intolerance
                    noted.&quot;</em>
                  </li>
                  <li>
                    Brings local epidemiology into the room: <em>&quot;Dengue cases are increasing in this
                    district. Consider NS1 testing.&quot;</em>
                  </li>
                  <li>
                    Grounds each suggestion in evidence so the physician understands both the
                    recommendation and the rationale.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  The value is not limited to faster documentation. The value is clearer thinking under
                  pressure and fewer preventable errors.
                </p>
              </div>
            </section>



            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">How It Works</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Listen</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      Multilingual automatic speech recognition that handles code-switching across common
                      Indian languages.
                    </li>
                    <li>Noise-robust acoustic models for crowded clinical environments.</li>
                    <li>
                      Real-time processing with speaker diarization that separates physician and patient
                      speech.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Structure &amp; Check</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      Extracts symptoms, medications, dosages, vital signs, and allergies into a
                      standardized schema and normalizes drug nomenclature by mapping brand names to
                      generics.
                    </li>
                    <li>
                      Applies rule engines and retrieval-augmented methods to validate dosage ranges,
                      identify drug–drug interactions, and flag allergy conflicts.
                    </li>
                    <li>
                      Integrates contextual signals, including geography, seasonality, demographics, and
                      medical history.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Help</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      Generates targeted prompts for follow-up questions that may have been overlooked,
                      improving diagnostic confidence.
                    </li>
                    <li>
                      Provides alerts for prescription or diagnostic conflicts with supporting references
                      for transparency and traceability.
                    </li>
                    <li>
                      Uses confidence thresholds to suppress low-reliability prompts and minimize alert
                      fatigue.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. File</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      Generates a structured clinical note that is compliant with Ayushman Bharat Digital
                      Mission standards for integration with the Unified Health Interface.
                    </li>
                    <li>
                      Produces a plain-language patient summary in regional languages with clear
                      instructions on medications, dosages, follow-ups, and warning signs.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Why Now */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Why Now</h2>
              <div className="space-y-6">
                <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                  <li>
                    <span className="font-medium">Advances in model maturity: </span> Recent progress in
                    ASR and LLMs enables reliable transcription and interpretation of noisy,
                    multilingual clinical conversations with medical lexicons.
                  </li>
                  <li>
                    <span className="font-medium">Digital health infrastructure: </span> ABDM provides a
                    national framework for interoperable records. Structured notes can flow and
                    integrate across institutions.
                  </li>
                  <li>
                    <span className="font-medium">Clinical openness: </span> A new generation of
                    physicians seeks low-friction tools that reduce administrative burden, mitigate
                    burnout, and add safety.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  The technology is ready, the rails are in place, and the need is urgent.
                </p>
              </div>
            </section>

            {/* Where We Are Now */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Where We Are Now
              </h2>
              <div className="space-y-6">
                                 <p className="text-gray-700 leading-relaxed">
                   TakeCare+ was selected for the{' '}
                   <Link
                     href="https://www.ashoka.edu.in/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline hover:text-gray-900"
                   >
                     Ashoka University
                   </Link>{' '}
                   Summer Incubation Program in 2025 and
                   has progressed from concept to early validation. We engaged physicians across
                   specialties and geographies to understand needs, workflows, and adoption barriers. We
                   mapped patient journeys to locate the breaks in continuity of care in Tier-2 and
                   Tier-3 settings. We developed segmentation frameworks for clinics, hospital networks,
                   and medical colleges with an emphasis on under-resourced contexts.
                 </p>
                <p className="text-gray-700 leading-relaxed">
                  A proof-of-concept prototype is in development. It focuses on multilingual
                  transcription, structured documentation, and first-pass safety checks such as
                  drug–drug interactions, dosage validation, and allergy conflicts. The next stage is to
                  complete the prototype and initiate pilot deployments with early adopters to evaluate
                  technical accuracy and the impact of real-time prompts on reducing errors of omission.
                </p>
              </div>
            </section>

            {/* Vision */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Vision</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  This project is inspired by{' '}
                  <Link
                    href="https://www.openevidence.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-900"
                  >
                    OpenEvidence
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://www.abridge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-900"
                  >
                    Abridge
                  </Link>
                  . The aim is a healthcare system where doctors are not forced to choose between speed
                  and safety, and where every patient can expect proper, safe, and thoughtful care. From
                  international hospitals in Tier-1 cities to modest clinics in Tier-3 towns, the goal
                  is to raise the baseline of medical practice so that access to reliable care is not
                  determined by geography or income.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The challenge is significant. It is also solvable.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

import { ChevronDown, ChevronRight } from "lucide-react"

const FaqList = () => {
  return (
    <section id="faq-list" className="mt-20 container">
      <div>
        <p className="font-semibold uppercase text-[15px] lg:text-base bg-gradient-to-r from-[#EFB1FF] to-[#ED50FF] bg-clip-text text-transparent mb-2">
          FAQ
        </p>
        <h2 className="font-semibold text-[40px]">
          Frequently Asked Questions.
        </h2>
        <p className="font-medium text-light/65 mt-1">
          VOUS AVEZ DES QUESTIONS ?
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <details className="group border-b pb-2 border-light/35">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-xl font-semibold normal-case">
              {" "}
              Des connaissances préalables sont-elles nécessaires pour rejoindre
              le discord ?
            </span>
            <span className="transition group-open:rotate-90 lg:group-open:rotate-180">
              <ChevronDown size={28} className="hidden lg:inline" />
              <ChevronRight size={28} className="lg:hidden" />
            </span>
          </summary>
          <p className="text-light/70 mt-3 group-open:animate-fadeIn lg:w-3/4">
            Aucune connaissance préalable en informatique n'est nécessaire pour
            accéder au service. Pour les débutants comme pour les vétérans, les
            explications sont à la disposition des membres pour les aider à
            chaque étape de leur progression. Notre staff est expérimenté et
            répondra à toutes les questions que vous vous posez.
          </p>
        </details>
        <details className="group border-b pb-2 border-light/35">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-xl font-semibold normal-case">
              {" "}
              Des connaissances préalables sont-elles nécessaires pour rejoindre
              le discord ?
            </span>
            <span className="transition group-open:rotate-90 lg:group-open:rotate-180">
              <ChevronDown size={28} className="hidden lg:inline" />
              <ChevronRight size={28} className="lg:hidden" />
            </span>
          </summary>
          <p className="text-light/70 mt-3 group-open:animate-fadeIn lg:w-3/4">
            Aucune connaissance préalable en informatique n'est nécessaire pour
            accéder au service. Pour les débutants comme pour les vétérans, les
            explications sont à la disposition des membres pour les aider à
            chaque étape de leur progression. Notre staff est expérimenté et
            répondra à toutes les questions que vous vous posez.
          </p>
        </details>
        <details className="group border-b pb-2 border-light/35">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-xl font-semibold normal-case">
              {" "}
              Des connaissances préalables sont-elles nécessaires pour rejoindre
              le discord ?
            </span>
            <span className="transition group-open:rotate-90 lg:group-open:rotate-180">
              <ChevronDown size={28} className="hidden lg:inline" />
              <ChevronRight size={28} className="lg:hidden" />
            </span>
          </summary>
          <p className="text-light/70 mt-3 group-open:animate-fadeIn lg:w-3/4">
            Aucune connaissance préalable en informatique n'est nécessaire pour
            accéder au service. Pour les débutants comme pour les vétérans, les
            explications sont à la disposition des membres pour les aider à
            chaque étape de leur progression. Notre staff est expérimenté et
            répondra à toutes les questions que vous vous posez.
          </p>
        </details>
      </div>
    </section>
  )
}

export default FaqList

import { SubscriptionProp } from "@/@types/subscription.type"

export const subscription: SubscriptionProp[] = [
  {
    package: "TICKETS",
    name: "Algorien Tickets",
    points: [
      "Tous les avantages de l'Agorien",
      "Accès aux alertes Tickets & Festival",
      "Accès aux queue pass exclusif",
      "Accès aux salons dédiés pour suivre de près les sorties",
      "Accès aux outils de scrapping pour des informations détaillées sur les tickets",
      "Accès aux calls tickets toujours plus rentable",
    ],
    isFlagship: false,
    price: "18.34€",
  },
  {
    package: "COLLECTIBLES",
    name: "Algorien Tickets",
    points: [
      "Tous les avantages de l'Agorien",
      "Accès aux alertes Pokémon",
      "Accès aux alertes Animes & Mangas",
      "Accès aux alertes Collectors",
      "Guide pour apprendre l'univers Pokémon",
      "Giveaway exclusif",
    ],
    isFlagship: false,
    price: "14.17€",
  },
  {
    package: "SNEAKERS",
    name: "Algorien Sneakers",
    points: [
      "Tous les avantages de l'Agorien",
      "Accès aux alertes @Sneakers",
      "Lien d'ajout automatique au panier (ATC)",
      "Task force spécial pour répondre à vos questions",
      "Guide pour apprendre l'univers Sneakers",
      "Giveaway exclusif",
      "Groupbuys avec des extensions/bots",
    ],
    isFlagship: false,
    price: "18.34€",
  },
  {
    package: "EVERYONE",
    name: "Algorien Multipass",
    points: [
      "Tous les avantages de l'Agorien Collectibles, de l'Agorien Tickets, de l'Agorien Hightech et de l'Agorien Sneakers,",
      "Accès à l'extension permettant l'auto ajout au panier",
      "Lien ATC + extension disponible dans les alertes",
      "Accès aux guides et tutos pour l'extension,",
      "Accès aux guides de réductions",
    ],
    isFlagship: true,
    price: "27.50€",
  },
]

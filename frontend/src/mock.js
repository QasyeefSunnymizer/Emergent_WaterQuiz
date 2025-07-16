// Mock data for the underwater dive game
export const diveLocations = [
  {
    id: 1,
    name: "Amazing Grace",
    icon: "🐠",
    description: "A vibrant reef teeming with life",
    backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
    creatures: [
      {
        id: 1,
        commonName: "Blacktip Reef Shark",
        scientificName: "Carcharhinus melanopterus",
        color: "Gray with black-tipped fins",
        shape: "Streamlined torpedo shape",
        size: "Up to 2 meters",
        funFact: "They're one of the few sharks that can jump fully out of the water when hunting!",
        image: "https://images.unsplash.com/photo-1576707948881-b485713fbad7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Can blacktip reef sharks jump out of the water?",
            type: "true_false",
            answer: true,
            explanation: "Yes! They're one of the few sharks that can jump fully out of the water when hunting."
          },
          {
            question: "How long can blacktip reef sharks grow?",
            type: "multiple_choice",
            options: ["1 meter", "2 meters", "3 meters", "4 meters"],
            answer: 1,
            explanation: "Blacktip reef sharks can grow up to 2 meters long."
          }
        ]
      },
      {
        id: 2,
        commonName: "Yellowtail Fusilier",
        scientificName: "Caesio cuning",
        color: "Blue body with yellow tail",
        shape: "Elongated and streamlined",
        size: "Up to 35 cm",
        funFact: "These colorful fish form dense schools for protection — safety in numbers!",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Why do yellowtail fusiliers form schools?",
            type: "multiple_choice",
            options: ["To hunt better", "For protection", "To find mates", "To stay warm"],
            answer: 1,
            explanation: "They form dense schools for protection — safety in numbers!"
          },
          {
            question: "Yellowtail fusiliers have yellow tails.",
            type: "true_false",
            answer: true,
            explanation: "Yes, they have distinctive yellow tails that give them their name."
          }
        ]
      },
      {
        id: 3,
        commonName: "Trevally",
        scientificName: "Caranx species",
        color: "Silver with metallic sheen",
        shape: "Deep-bodied and compressed",
        size: "Varies by species",
        funFact: "These speedy predators can change color when hunting to confuse their prey.",
        image: "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Trevallies can change color when hunting.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They can change color when hunting to confuse their prey."
          },
          {
            question: "What is the main purpose of trevallies changing color?",
            type: "multiple_choice",
            options: ["To stay warm", "To confuse prey", "To attract mates", "To hide from predators"],
            answer: 1,
            explanation: "They change color to confuse their prey when hunting."
          }
        ]
      },
      {
        id: 4,
        commonName: "Nudibranch",
        scientificName: "Various species",
        color: "Highly variable and colorful",
        shape: "Soft-bodied with appendages",
        size: "Usually small, under 5 cm",
        funFact: "These sea slugs 'steal' toxins from the things they eat and use them for their own defense.",
        image: "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Nudibranchs can steal toxins from their food.",
            type: "true_false",
            answer: true,
            explanation: "Yes! These sea slugs 'steal' toxins from what they eat and use them for defense."
          },
          {
            question: "How do nudibranchs typically defend themselves?",
            type: "multiple_choice",
            options: ["By swimming fast", "Using stolen toxins", "By hiding in shells", "By changing color"],
            answer: 1,
            explanation: "They use toxins 'stolen' from their food for defense."
          }
        ]
      },
      {
        id: 5,
        commonName: "Whale Shark",
        scientificName: "Rhincodon typus",
        color: "Gray with white spots",
        shape: "Massive and elongated",
        size: "Up to 18 meters",
        funFact: "The largest fish in the ocean, yet they only eat tiny plankton and can live up to 100 years.",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Whale sharks are the largest fish in the ocean.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They are the largest fish in the ocean, growing up to 18 meters long."
          },
          {
            question: "What do whale sharks primarily eat?",
            type: "multiple_choice",
            options: ["Large fish", "Tiny plankton", "Seaweed", "Other sharks"],
            answer: 1,
            explanation: "Despite being huge, whale sharks only eat tiny plankton."
          }
        ]
      }
    ],
    locationTrivia: [
      {
        question: "Amazing Grace is known for its diverse marine life including which seasonal visitor?",
        type: "multiple_choice",
        options: ["Dolphins", "Whale sharks", "Manta rays", "Sea turtles"],
        answer: 1,
        explanation: "Whale sharks are seasonal visitors to Amazing Grace!"
      },
      {
        question: "Amazing Grace is a popular diving site in Malaysia.",
        type: "true_false",
        answer: true,
        explanation: "Yes! Amazing Grace is one of the famous diving sites around Tenggol Island."
      }
    ]
  },
  {
    id: 2,
    name: "Tokong Laut",
    icon: "🐙",
    description: "Temple of the Sea",
    backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
    creatures: [
      {
        id: 6,
        commonName: "Batfish",
        scientificName: "Platax species",
        color: "Silver with distinctive patterns",
        shape: "Disc-shaped and laterally compressed",
        size: "Up to 65 cm",
        funFact: "Juvenile batfish look totally different from adults — young ones are black with an orange border!",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Juvenile batfish look the same as adults.",
            type: "true_false",
            answer: false,
            explanation: "No! Juvenile batfish look totally different - they're black with orange borders!"
          },
          {
            question: "What color are juvenile batfish?",
            type: "multiple_choice",
            options: ["Silver", "Black with orange border", "Yellow", "Blue"],
            answer: 1,
            explanation: "Juvenile batfish are black with an orange border, very different from adults."
          }
        ]
      },
      {
        id: 7,
        commonName: "Barracuda",
        scientificName: "Sphyraena species",
        color: "Silver with dark stripes",
        shape: "Long and torpedo-shaped",
        size: "Up to 2 meters",
        funFact: "Barracudas have a fearsome look but are generally harmless to divers — their teeth help catch slippery fish.",
        image: "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Barracudas are dangerous to divers.",
            type: "true_false",
            answer: false,
            explanation: "Despite their fearsome look, barracudas are generally harmless to divers."
          },
          {
            question: "What are barracuda teeth primarily used for?",
            type: "multiple_choice",
            options: ["Attacking divers", "Catching slippery fish", "Eating coral", "Defense only"],
            answer: 1,
            explanation: "Their sharp teeth help them catch slippery fish effectively."
          }
        ]
      },
      {
        id: 8,
        commonName: "Giant Grouper",
        scientificName: "Epinephelus lanceolatus",
        color: "Brown to greenish-brown",
        shape: "Large and robust",
        size: "Up to 2.7 meters",
        funFact: "They can weigh over 400 kg and make loud 'booming' sounds to defend their territory!",
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Giant groupers can weigh over 400 kg.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Giant groupers can weigh over 400 kg, making them true giants of the reef."
          },
          {
            question: "How do giant groupers defend their territory?",
            type: "multiple_choice",
            options: ["By swimming away", "Making booming sounds", "Changing color", "Building barriers"],
            answer: 1,
            explanation: "They make loud 'booming' sounds to defend their territory!"
          }
        ]
      },
      {
        id: 9,
        commonName: "Moray Eel",
        scientificName: "Gymnothorax species",
        color: "Variable, often mottled",
        shape: "Long and snake-like",
        size: "Up to 3 meters",
        funFact: "They constantly open and close their mouths to pump water over their gills — not because they're angry!",
        image: "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Moray eels open their mouths because they're angry.",
            type: "true_false",
            answer: false,
            explanation: "No! They constantly open and close their mouths to pump water over their gills for breathing."
          },
          {
            question: "Why do moray eels constantly open and close their mouths?",
            type: "multiple_choice",
            options: ["They're angry", "To pump water over gills", "To scare prey", "To communicate"],
            answer: 1,
            explanation: "They need to pump water over their gills to breathe properly."
          }
        ]
      },
      {
        id: 10,
        commonName: "Scorpionfish",
        scientificName: "Scorpaenidae family",
        color: "Highly variable, camouflaged",
        shape: "Stocky with spiny fins",
        size: "15-50 cm depending on species",
        funFact: "Masters of camouflage, they blend in so well that divers often miss them entirely.",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Scorpionfish are masters of camouflage.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They blend in so well that divers often miss them entirely."
          },
          {
            question: "What is the scorpionfish's main defense strategy?",
            type: "multiple_choice",
            options: ["Swimming fast", "Camouflage", "Loud noises", "Grouping together"],
            answer: 1,
            explanation: "They are masters of camouflage and blend perfectly with their surroundings."
          }
        ]
      },
      {
        id: 11,
        commonName: "Green Sea Turtle",
        scientificName: "Chelonia mydas",
        color: "Olive green to brown",
        shape: "Large oval shell",
        size: "Up to 1.5 meters",
        funFact: "Green turtles can live over 80 years and always return to the beach where they were born to lay eggs.",
        image: "https://images.unsplash.com/photo-1576707948881-b485713fbad7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Green sea turtles return to their birth beach to lay eggs.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They always return to the beach where they were born to lay their own eggs."
          },
          {
            question: "How long can green sea turtles live?",
            type: "multiple_choice",
            options: ["20 years", "40 years", "Over 80 years", "10 years"],
            answer: 2,
            explanation: "Green sea turtles can live over 80 years!"
          }
        ]
      }
    ],
    locationTrivia: [
      {
        question: "Tokong Laut means what in English?",
        type: "multiple_choice",
        options: ["Sea Temple", "Temple of the Sea", "Ocean Palace", "Deep Blue"],
        answer: 1,
        explanation: "Tokong Laut means 'Temple of the Sea' in English."
      },
      {
        question: "Tokong Laut is known for its large marine species.",
        type: "true_false",
        answer: true,
        explanation: "Yes! It's famous for giant groupers, large moray eels, and sea turtles."
      }
    ]
  },
  {
    id: 3,
    name: "Coral Garden",
    icon: "🐢",
    description: "A colorful coral paradise",
    backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
    creatures: [
      {
        id: 12,
        commonName: "Clownfish",
        scientificName: "Amphiprion ocellaris",
        color: "Orange with white stripes",
        shape: "Small and rounded",
        size: "Up to 11 cm",
        funFact: "Clownfish are all born male — the dominant one can change into a female if needed!",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "All clownfish are born male.",
            type: "true_false",
            answer: true,
            explanation: "Yes! All clownfish are born male, and the dominant one can change into a female if needed."
          },
          {
            question: "When do clownfish change from male to female?",
            type: "multiple_choice",
            options: ["When they're old", "When dominant", "When scared", "Never"],
            answer: 1,
            explanation: "The dominant clownfish in a group can change from male to female when needed."
          }
        ]
      },
      {
        id: 13,
        commonName: "Parrotfish",
        scientificName: "Scaridae family",
        color: "Bright and varied colors",
        shape: "Elongated with beak-like mouth",
        size: "20-100 cm depending on species",
        funFact: "They sleep in a 'bubble' of mucus at night to hide their scent from predators.",
        image: "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Parrotfish sleep in a mucus bubble.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They create a mucus bubble at night to hide their scent from predators."
          },
          {
            question: "Why do parrotfish create mucus bubbles?",
            type: "multiple_choice",
            options: ["To stay warm", "To hide scent from predators", "To breathe better", "To attract mates"],
            answer: 1,
            explanation: "The mucus bubble helps hide their scent from predators while they sleep."
          }
        ]
      },
      {
        id: 14,
        commonName: "Butterflyfish",
        scientificName: "Chaetodontidae family",
        color: "Bright yellow with patterns",
        shape: "Disc-shaped and laterally compressed",
        size: "12-22 cm",
        funFact: "Many species mate for life and swim in pairs. ❤️",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Many butterflyfish species mate for life.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Many butterflyfish species mate for life and swim in pairs."
          },
          {
            question: "How do butterflyfish typically swim?",
            type: "multiple_choice",
            options: ["Alone", "In pairs", "In large schools", "In groups of three"],
            answer: 1,
            explanation: "They often swim in pairs, especially mated pairs that stay together for life."
          }
        ]
      },
      {
        id: 15,
        commonName: "Juvenile Reef Shark",
        scientificName: "Carcharhinus species",
        color: "Light gray with darker markings",
        shape: "Small streamlined torpedo",
        size: "50-80 cm (juveniles)",
        funFact: "Baby sharks often stay in shallow 'nurseries' to avoid bigger predators — even other sharks.",
        image: "https://images.unsplash.com/photo-1576707948881-b485713fbad7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Baby sharks stay in shallow nurseries for protection.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Baby sharks stay in shallow 'nurseries' to avoid bigger predators, even other sharks."
          },
          {
            question: "What do juvenile sharks need protection from?",
            type: "multiple_choice",
            options: ["Small fish", "Bigger predators", "Coral", "Currents"],
            answer: 1,
            explanation: "They need protection from bigger predators, including other larger sharks."
          }
        ]
      },
      {
        id: 16,
        commonName: "Pipefish",
        scientificName: "Syngnathidae family",
        color: "Variable, often green or brown",
        shape: "Long and thin like a pipe",
        size: "15-30 cm",
        funFact: "Relatives of seahorses, the males carry the eggs until they hatch!",
        image: "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Male pipefish carry the eggs until they hatch.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Just like seahorses, male pipefish carry the eggs until they hatch."
          },
          {
            question: "Pipefish are related to which other sea creature?",
            type: "multiple_choice",
            options: ["Octopus", "Seahorses", "Jellyfish", "Starfish"],
            answer: 1,
            explanation: "Pipefish are relatives of seahorses and share similar characteristics."
          }
        ]
      },
      {
        id: 17,
        commonName: "Sea Butterfly Nudibranch",
        scientificName: "Various colorful species",
        color: "Bright and varied colors",
        shape: "Small with wing-like appendages",
        size: "1-5 cm",
        funFact: "Some species are so brightly colored they're nicknamed 'sea butterflies'.",
        image: "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Some nudibranchs are called 'sea butterflies'.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Some species are so brightly colored they're nicknamed 'sea butterflies'."
          },
          {
            question: "Why are some nudibranchs called 'sea butterflies'?",
            type: "multiple_choice",
            options: ["They fly underwater", "They're brightly colored", "They have wings", "They migrate"],
            answer: 1,
            explanation: "They're called 'sea butterflies' because of their bright, beautiful colors."
          }
        ]
      }
    ],
    locationTrivia: [
      {
        question: "Coral Garden is primarily known for its colorful coral formations.",
        type: "true_false",
        answer: true,
        explanation: "Yes! Coral Garden is famous for its vibrant and diverse coral formations."
      },
      {
        question: "Which type of marine life is most abundant in Coral Garden?",
        type: "multiple_choice",
        options: ["Large sharks", "Colorful reef fish", "Whales", "Jellyfish"],
        answer: 1,
        explanation: "Coral Garden is known for its abundant colorful reef fish living among the corals."
      }
    ]
  },
  {
    id: 4,
    name: "5 Sisters",
    icon: "🐟",
    description: "Five pinnacles rising from the deep",
    backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
    creatures: [
      {
        id: 18,
        commonName: "Bumphead Parrotfish",
        scientificName: "Bolbometopon muricatum",
        color: "Green to blue-green",
        shape: "Large with distinctive bump on head",
        size: "Over 1.5 meters",
        funFact: "They can grow over 1.5 meters long and 'headbutt' coral to break it apart!",
        image: "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Bumphead parrotfish headbutt coral to break it apart.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They use their large bump to headbutt coral and break it apart for feeding."
          },
          {
            question: "How do bumphead parrotfish feed on coral?",
            type: "multiple_choice",
            options: ["They nibble gently", "They headbutt it", "They use tools", "They wait for it to fall"],
            answer: 1,
            explanation: "They use their distinctive head bump to headbutt coral and break it apart."
          }
        ]
      },
      {
        id: 19,
        commonName: "Sweetlips",
        scientificName: "Plectorhinchus species",
        color: "Variable, often with spots or stripes",
        shape: "Deep-bodied with thick lips",
        size: "30-80 cm",
        funFact: "Juvenile sweetlips have wildly different patterns and swim with wiggly movements to mimic poisonous flatworms.",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Juvenile sweetlips mimic poisonous flatworms.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Juveniles have different patterns and swim with wiggly movements to mimic poisonous flatworms."
          },
          {
            question: "How do juvenile sweetlips protect themselves?",
            type: "multiple_choice",
            options: ["Hiding in coral", "Mimicking poisonous flatworms", "Swimming in schools", "Changing color"],
            answer: 1,
            explanation: "They mimic poisonous flatworms with their patterns and wiggly swimming movements."
          }
        ]
      },
      {
        id: 20,
        commonName: "Barracuda School",
        scientificName: "Sphyraena barracuda",
        color: "Silver with darker patterns",
        shape: "Long and streamlined",
        size: "Up to 2 meters",
        funFact: "They sometimes follow divers, curious about their bubbles and shiny gear.",
        image: "https://images.unsplash.com/photo-1463468217891-c11f48e6310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Barracudas sometimes follow divers out of curiosity.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They sometimes follow divers, curious about their bubbles and shiny gear."
          },
          {
            question: "What attracts barracudas to divers?",
            type: "multiple_choice",
            options: ["Food", "Bubbles and shiny gear", "Warmth", "Protection"],
            answer: 1,
            explanation: "They're curious about divers' bubbles and shiny diving equipment."
          }
        ]
      },
      {
        id: 21,
        commonName: "Nurse Shark",
        scientificName: "Ginglymostoma cirratum",
        color: "Brown to yellowish-brown",
        shape: "Robust with broad head",
        size: "Up to 4 meters",
        funFact: "Unlike most sharks, they're nocturnal and rest motionless under ledges during the day.",
        image: "https://images.unsplash.com/photo-1576707948881-b485713fbad7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Nurse sharks are nocturnal.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Unlike most sharks, nurse sharks are nocturnal and rest under ledges during the day."
          },
          {
            question: "When are nurse sharks most active?",
            type: "multiple_choice",
            options: ["During the day", "At night", "At dawn", "All the time"],
            answer: 1,
            explanation: "Nurse sharks are nocturnal, meaning they're most active at night."
          }
        ]
      },
      {
        id: 22,
        commonName: "Pufferfish",
        scientificName: "Tetraodontidae family",
        color: "Variable, often with patterns",
        shape: "Round when inflated",
        size: "15-60 cm",
        funFact: "They inflate themselves by gulping water when threatened — but doing it too often stresses them out.",
        image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHx1bmRlcndhdGVyJTIwZmlzaHxlbnwwfHx8Ymx1ZXwxNzUyNjUzMzQxfDA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Pufferfish inflate by gulping water.",
            type: "true_false",
            answer: true,
            explanation: "Yes! They inflate themselves by gulping water when threatened."
          },
          {
            question: "What happens if pufferfish inflate too often?",
            type: "multiple_choice",
            options: ["They get stronger", "They get stressed", "They become faster", "Nothing happens"],
            answer: 1,
            explanation: "Inflating too often can stress them out, so they only do it when really threatened."
          }
        ]
      },
      {
        id: 23,
        commonName: "Frogfish",
        scientificName: "Antennariidae family",
        color: "Highly variable, camouflaged",
        shape: "Rounded with large mouth",
        size: "5-38 cm",
        funFact: "Masters of disguise, they 'walk' on their fins and can swallow prey as big as themselves in a single gulp!",
        image: "https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYXJpbmUlMjBsaWZlfGVufDB8fHxibHVlfDE3NTI2NTMzMzJ8MA&ixlib=rb-4.1.0&q=85",
        trivia: [
          {
            question: "Frogfish can walk on their fins.",
            type: "true_false",
            answer: true,
            explanation: "Yes! Frogfish are masters of disguise and can 'walk' on their fins."
          },
          {
            question: "How big can frogfish prey be compared to themselves?",
            type: "multiple_choice",
            options: ["Much smaller", "Half their size", "Same size", "Much bigger"],
            answer: 2,
            explanation: "They can swallow prey as big as themselves in a single gulp!"
          }
        ]
      }
    ],
    locationTrivia: [
      {
        question: "5 Sisters refers to five underwater pinnacles.",
        type: "true_false",
        answer: true,
        explanation: "Yes! 5 Sisters is named after five underwater pinnacles that rise from the deep."
      },
      {
        question: "What makes 5 Sisters unique?",
        type: "multiple_choice",
        options: ["Five coral gardens", "Five underwater pinnacles", "Five types of fish", "Five diving instructors"],
        answer: 1,
        explanation: "It's named after five underwater pinnacles rising from the deep ocean floor."
      }
    ]
  }
];

// Island trivia
export const tenggolTrivia = [
  {
    question: "Tenggol Island has only a handful of resorts and no big hotels.",
    type: "true_false",
    answer: true,
    explanation: "Yes! This keeps the reefs healthy and uncrowded, maintaining the natural beauty."
  },
  {
    question: "Many divers say Tenggol feels like which other island from 30 years ago?",
    type: "multiple_choice",
    options: ["Langkawi", "Perhentian Islands", "Tioman", "Pangkor"],
    answer: 1,
    explanation: "Many divers say Tenggol feels like the Perhentian Islands from 30 years ago!"
  }
];

// Sound effects URLs (you can replace these with actual sound files)
export const soundEffects = {
  bubbles: '/sounds/bubbles.mp3',
  splash: '/sounds/splash.mp3',
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3',
  backgroundMusic: '/sounds/underwater-ambient.mp3'
};
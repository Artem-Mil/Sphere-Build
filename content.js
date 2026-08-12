/* ============================================================
   SPHERE VISION — BUILD GUIDE CONTENT
   ============================================================
   This file contains ALL text on the site.
   To update the guide: edit this file, save, redeploy to Vercel.
   You do not need to touch index.html, app.js, or styles.css.

   Rules:
   - Keep the structure (the { } and [ ] brackets) intact.
   - Text goes between quotes. Use \" for a quote inside text.
   - To add a schedule item, copy a whole { ... } block in the
     list and edit it.
   ============================================================ */

const CONTENT = {

  meta: {
    campName: "Sphere Vision",
    title: "Build Guide 2026",
    subtitle: "Black Rock City · Burning Man 2026",
    lastUpdated: "August 12, 2026 · 7 PM",
    heroLine: "One trailer. Three tents. Three structures. Three giants on the playa. We build it together.",
    pinned: [
      { label: "Yellow trailer lock code", value: "2065" },
      { label: "Weather updates", value: "BRC Dashboard + BMIR 94.5 FM, daily" },
      { label: "Build questions", value: "Drey, Ryan Lewis, or Leo" }
    ]
  },

  overview: {
    heading: "What we are building",
    intro: "Build crew is the crew that gets it done. The build will not be easy, especially if the weather is bad. Read this whole guide before you get to the playa. Get mentally prepared. Lots of things will be architected on the spot.",
    items: [
      { name: "Main tent", detail: "50 × 35 ft Moroccan tent. DJ booth, LED bar, and lounge inside. Target: finished Friday." },
      { name: "Kitchen tent", detail: "Brand new, easy install. Must be anchored. Needs side walls." },
      { name: "White gathering tent", detail: "26 × 16 ft. Food, seating, common area." },
      { name: "Charging station tent", detail: "10 × 20 ft. Bike and device charging. Plus a couple of easy-ups." },
      { name: "Shade structure", detail: "Sail-style shade over shift pods, tents, and yurts. Frame is 1½ in steel pipe, not wood. Pipe gets hot. Wear gloves." },
      { name: "Communal showers", detail: "275-gallon tank system. Arrives Friday morning. Target: operational by Friday." },
      { name: "Tipi", detail: "Traditional-style tipi with a fireplace inside. This is our temple and tea room: a meditation and sacred space to honor the Indigenous people whose ancestral lands we gather on. There is no separate temple." },
      { name: "Playa art installation", detail: "Three giant inflatables out on the open playa: two droids and Mother of Playa, with their own generator, power, and lighting." }
    ]
  },

  schedule: {
    heading: "Arrivals + build schedule",
    note: "Arrivals as they stand now. Drey posts the detailed hour-by-hour build schedule once the camp plan for structures and shift pods is final.",
    days: [
      {
        day: "WED",
        date: "Aug 26",
        title: "Arrivals: Ryan, Martinique, Drey",
        items: [
          "Ryan, Martinique, and Drey arrive.",
          "Advance prep: get the camp ready for the team.",
          "Trailer is loaded in LA: sound, lights, generator, rigging, and all tools.",
          "35-ft container/trailer delivery to camp (afternoon/evening)."
        ]
      },
      {
        day: "THU",
        date: "Aug 27",
        title: "Arrivals + main tent",
        items: [
          "Lion, Andrey, Artem, Rustem, and Rashid arrive.",
          "Put up the main tent.",
          "This group: get a small generator. Talk to Cameron or Dmitriy before you travel.",
          "Marty is already on playa (since Mon Aug 24) and can prep the electrical-box wood on Thursday."
        ]
      },
      {
        day: "FRI",
        date: "Aug 28",
        title: "Arrivals: TerrYaki, Crispin, Nina, Leo, Dmitriy — unload + main tent",
        items: [
          "TerrYaki, Crispin, Nina, Leo, and Dmitriy arrive.",
          "8:00 am — Dmitriy arrives with the crew. Shower system arrives in the morning (Andrey brings it).",
          "Morning — unload the 40-ft trailer completely. Quick inventory during unload. Separate everything into piles: kitchen, carpet, yurts and shift pods, rigging (pipe, bull picks, tools). Count the pipe. Pull out and separate all tents.",
          "After lunch (~3 pm) — build the main tent. Then install sound, bar, and lounge inside. Goal: main tent done Friday.",
          "After the main tent is up — build your own shift pods and yurts.",
          "Next — kitchen tent, then the shade structure over shift pods and yurts.",
          "Eva does full kitchen inventory during the morning unload, then feeds the crew."
        ]
      },
      {
        day: "SAT",
        date: "Aug 29",
        title: "Split crews: playa + camp",
        items: [
          "Playa crew — 6 people go with Drey to install the 3 inflatables and connect power to the generator. Plan 4–6 hours on the playa.",
          "Camp crew — finish the white gathering tent, kitchen area, and a couple of easy-ups for the bike charging station.",
          "Get the shade structure up.",
          "Set up the tipi (our temple + tea room) when there is time."
        ]
      }
    ]
  },

  campBuild: {
    heading: "Camp structures — how they go up",
    sections: [
      {
        name: "Main tent — 50 × 35 ft Moroccan",
        image: "img/main-tent-plan.jpg",
        imageCaption: "Main tent plan. Ignore small AI drawing mistakes; dimensions and pole layout are correct.",
        points: [
          "Poles: 2 center poles (16 ft) + 8 perimeter poles (12 ft). All 1½ in Schedule 40 steel pipe.",
          "Pole layout: 4 corners, 2 poles on each 50-ft side opposite each other, no poles on the 35-ft ends, 2 center poles in a straight line down the middle (18–20 ft apart).",
          "Perimeter poles lean outward, about 75° relative to the opposite side, pulled away from the center.",
          "Each pole is held by multiple guy lines to anchors about 4 ft from the pole base. Guy lines at 45°. Rebar holds the pipe in place.",
          "Heavy-duty ratchet straps on all guy lines. Re-check and tighten daily.",
          "The tent has side walls with windows and doors. Layout inside (DJ booth, LED bar, lounge) can be adjusted.",
          "Orient the long 50-ft side into the prevailing wind. Close or add shade cloth on the windward side if needed."
        ]
      },
      {
        name: "Shade structure for shift pods + yurts",
        image: "img/shade-structure.jpg",
        imageCaption: "Sail-style shade concept. Ours uses 1½ in steel pipe instead of wooden poles.",
        points: [
          "Frame is 1½ in steel pipe, not wood. Pipe sits in the sun and gets hot. Bring gloves and keep them on.",
          "Shade piece sizes on hand: 18×18×18 ft, 32×32×32 ft, 16×16×16 ft, plus the set Alex bought.",
          "Goes up Saturday after the tents."
        ]
      },
      {
        name: "Other tents",
        points: [
          "Inventory: two 20 × 10 ft tents, one 25 × 16 ft, plus one extra ordered as backup.",
          "Kitchen tent: brand new, easy install, must be anchored, needs sides.",
          "White gathering tent (26 × 16 ft): food, seating, common area.",
          "10 × 20 ft tent: bike charging station."
        ]
      },
      {
        name: "Yurts + tape",
        points: [
          "Yurt seam tape must be 6 in wide.",
          "2 rolls per yurt.",
          "Tape inside AND outside."
        ]
      },
      {
        name: "Tipi — our temple + tea room",
        points: [
          "Traditional-style tipi with a fireplace inside. This is our temple and tea room. There is no separate temple in our camp.",
          "A meditation and sacred space, honoring the Indigenous people whose ancestral lands we gather on.",
          "Ours is exactly the model in this assembly video. Watch it before the playa:",
          "https://youtu.be/8qe3FMbJ_8o",
          "Second reference video: https://youtu.be/znGR5AXY3AM",
          "TerrYaki is tending the tipi as a sacred space: prayer, Theravada chants with Nina, and sound baths with Crispin."
        ]
      }
    ]
  },

  playaArt: {
    heading: "Playa art installation",
    intro: "Three inflatables on the open playa: two droids (40 ft long × 20–22 ft high, one female, one male) and Mother of Playa (23 ft high). Each one has its own air pumps and about two LED lighting runs. A 6-person crew installs everything with Drey on Saturday (or Friday morning). Plan 4–6 hours.",
    heroImage: "img/playa-installation.jpg",
    heroCaption: "The installation: two droids and Mother of Playa.",
    gallery: [
      { image: "img/droids-test-2.jpg", caption: "Droid at the test inflation. Note the guy lines to ground anchors." },
      { image: "img/droids-test-4.jpg", caption: "Rigging points and ground anchors visible at the base." }
    ],
    blocks: [
      {
        name: "Securing + rigging",
        points: [
          "Each inflatable: about 20 × 20-lb sandbags, filled with playa sand, anchoring the base.",
          "Each inflatable has 8 designated rigging points. Every point gets rope, anchored directly into the playa.",
          "Equipment: 2 heavy-duty sledgehammers, 8 bull picks, rope, carabiners, 2 shovels, 1 rake."
        ]
      },
      {
        name: "Power + electrical box",
        image: "img/electrical-box.jpg",
        imageCaption: "In-ground power distribution box: 2.5-ft square pit, 4 wooden sides, 4 × 4 ft plywood lid on top.",
        points: [
          "Generator sits about 100 ft from the art. The generator area gets warning signs and solar LED lighting at night.",
          "Main distribution box goes in the ground, below playa level, inside a wooden enclosure with a 4 × 4 ft plywood lid. We need one 4 × 8 ft plywood sheet, screws, and a screw gun to build it.",
          "Holes in the wood sides pass the 100-amp cable and the extensions to the inflatables.",
          "The main power cable is trenched into the playa. The ASS department (Burning Man's power/trenching crew) handles the trenching with their equipment.",
          "Once the box is hot: lid on, screwed down, playa dust on top. It stays closed until strike.",
          "Perimeter at night: four 100-ft solar LED light strings around the installation."
        ]
      },
      {
        name: "Crew supplies for install day",
        points: [
          "Water.",
          "Lunch.",
          "Full cooler of beer."
        ]
      }
    ]
  },

  emergency: {
    heading: "Emergency protocols",
    intro: "Two pinned protocols. Read both before you arrive. Check the BRC Dashboard daily (brcdashboard.burningman.org) and tune to BMIR 94.5 FM for weather and emergency updates.",
    art: {
      name: "Art installation — weather protocol",
      tagline: "A dedicated emergency crew drops everything and bikes or drives with Drey to the installation the moment a response is needed. You know who you are.",
      rules: [
        {
          trigger: "Rain, 30 minutes or less",
          level: "ok",
          actions: ["No action required. Do not panic."]
        },
        {
          trigger: "Rain, more than 1 hour",
          level: "danger",
          actions: [
            "SHUT DOWN THE GENERATOR. Only a trained person shuts it down or restarts it.",
            "After the rain stops: open the wooden lid and check for standing water.",
            "DO NOT restart the generator if any water is present.",
            "If water is present, keep the lid open until the pit is completely dry.",
            "Once dry: lid back on, screwed down, playa dust on top. Only then may a trained person restart the generator."
          ]
        },
        {
          trigger: "Wind over 30 mph",
          level: "danger",
          actions: [
            "SHUT DOWN THE GENERATOR. Inflatables get deflated.",
            "Fold each inflatable in its designated place. Secure with the existing ropes, anchors, and sandbags.",
            "Each inflatable has two large zip air pockets at the bottom holding sandbags. Take the sandbags out and place them on top of the folded inflatable.",
            "ZIP BOTH AIR POCKETS CLOSED.",
            "Confirm every inflatable is anchored and cannot move or go airborne."
          ]
        },
        {
          trigger: "After heavy rain or high winds — restart sequence",
          level: "amber",
          actions: [
            "Remove the sandbags from the folded inflatables. Untie the securing ropes.",
            "Start the generator and begin inflating.",
            "As they fill: reattach ropes and carabiners to their original points.",
            "While inflating: put the sandbags back into the two zip pockets at the base. ZIP BOTH POCKETS CLOSED.",
            "Fully inflated: check every tie-down and anchor. Final inspection before leaving the site."
          ]
        }
      ]
    },
    camp: {
      name: "Camp — weather protocol",
      rules: [
        {
          trigger: "Short shower (10–15 min)",
          level: "ok",
          actions: ["Normal. Not an emergency. No special action."]
        },
        {
          trigger: "When rain starts",
          level: "amber",
          actions: [
            "Close and secure all RV doors, windows, storage, vents, and awnings.",
            "Tent, yurt, or shift pod: rain cover on, closed, fastened.",
            "Belongings off the ground and into a dry place. Elevate personal connectors and extension cords.",
            "DO NOT walk barefoot in the rain.",
            "DO NOT touch trailer cables or any high-voltage cables. Leave electrical work to qualified people."
          ]
        },
        {
          trigger: "Rain longer than 1 hour",
          level: "danger",
          actions: [
            "DO NOT drive or bike out of camp or on playa streets. Playa mud gets deep and sticky; vehicles get stuck.",
            "Return to camp and stay. We have food, electricity, music, and good company.",
            "Wait until roads and playa are completely dry before driving, biking, or moving trailers."
          ]
        },
        {
          trigger: "High winds",
          level: "danger",
          actions: [
            "Come back to camp as soon as you can. Flying debris injures people.",
            "Goggles and face covering with you at all times when leaving camp, wind or not.",
            "No loose cardboard, garbage, chairs, or other items left out. Tie down anything that can fly.",
            "Small items get boxed and stored. DJ and sensitive gear into cases, covered with a tarp.",
            "EVERYONE in camp participates in securing the camp."
          ]
        },
        {
          trigger: "Caught out in extreme weather",
          level: "danger",
          actions: [
            "If you cannot safely make it back: shelter in place, or ask a nearby camp for shelter. Do not stay exposed on open playa.",
            "Keep moving slowly and deliberately toward the nearest camp or populated area. Know your direction.",
            "Stay with your companion. Hold hands and walk slowly together.",
            "Do not panic. It will pass. Stay sheltered until conditions improve.",
            "DO NOT drive, bike, or move trailers during extreme weather."
          ]
        }
      ]
    }
  },

  showers: {
    heading: "Communal showers",
    intro: "About 20–22 people share the showers. The shower group runs them. Two dedicated people handle the equipment (pumps, motors, technical issues). Everything else — water refills and grey-water pump-outs — is on the group. Organize a simple rotation so someone is responsible each service day.",
    facts: [
      { label: "Tank", value: "275 gallons — refill and pump out roughly every other day" },
      { label: "Grey water", value: "Find a United Site Services pump-out truck, bring it to camp, get the tank pumped. Coordinate with the RV pump-out person so RVs get serviced on the same visit." },
      { label: "Fresh water", value: "Water truck is already scheduled every other day. The person on duty is at camp, flags the truck to our spot, and makes sure the tank fills." },
      { label: "Cost", value: "Cash only, split equally. Pump-out ~$300 per 275 gal (~$15/person). Fresh water ~$25/person. Expect ~$40/person every two days, roughly $120/person for the week." }
    ]
  },

  packing: {
    heading: "What to bring",
    intro: "Get yourself prepared for the worst. Strike will have twice the people; build will not.",
    groups: [
      {
        name: "Everyone on build crew",
        items: [
          "WORK GLOVES. The steel pipe gets hot. This is the one thing Drey repeats.",
          "Construction work clothes.",
          "Goggles and a face covering or dust mask. Carry them whenever you leave camp.",
          "Printouts of this guide and the protocols (Starlink is text-only)."
        ]
      },
      {
        name: "Local crew / if you can",
        items: [
          "Some old tools. Drey has what the build needs, but extras help.",
          "One 4 × 8 ft plywood sheet for the in-ground electrical box.",
          "Screws and a screw gun.",
          "Yurt tape: 6 in wide, 2 rolls per yurt."
        ]
      }
    ],
    internet: "Internet at camp: Starlink, set up by Drey. Texting only, no video or movies. Some cellular near Center Camp. Phone calls stop going through after the first Saturday."
  },

  crew: {
    heading: "Crew + contacts",
    leads: [
      { name: "Drey Sphere", role: "Camp lead and art installation build lead. Camp plan, schedule, playa install. Call with any question." },
      { name: "Dmitriy BM", role: "Co-organizer. Tents, tipi, showers, logistics." },
      { name: "Ryan Lewis", role: "Lead crew. Go-to for build questions and general schedule." },
      { name: "Leo Lesh", role: "Lead crew. Go-to for build questions and general schedule." }
    ],
    members: [
      { name: "Martinique", role: "Build crew." },
      { name: "Ryan (LA)", role: "Comes in with Drey for advance prep." },
      { name: "Artem M", role: "Build crew. 3rd-time burner, coordinating for Rashid and Rustem. Has an SUV for the build." },
      { name: "Rashid", role: "Build crew. First burn." },
      { name: "Rustem Umerov", role: "Build crew. First burn." },
      { name: "Andrey", role: "Build crew. Brings the shower system." },
      { name: "Leon / Lion", role: "Build crew." },
      { name: "Leo Lesh", role: "Build crew." },
      { name: "Dmitriy BM", role: "Co-organizer. Tents, tipi, showers, logistics." },
      { name: "TerrYaki", role: "Tipi keeper. Sacred space, prayer, sound baths." },
      { name: "Nina Mai", role: "Traditional Theravada chants in the tipi." },
      { name: "Crispin", role: "Sound baths in the tipi." },
      { name: "Cameron Thomson", role: "Head electrician. Point of contact for the small generator." },
      { name: "Tomas Bollo", role: "Sound system tuning. On the DJ roster." },
      { name: "Eva (EB)", role: "Camp cook. Kitchen inventory Friday morning, then feeds the crew all event. Take care of her." },
      { name: "Marty", role: "Experienced builder, on playa from Mon Aug 24. Helps Friday pm + Saturday playa build, droids, and the electrical box wood. Camping at Gothic Folly (8:45 & D), later Global (6:15 & F)." }
    ],
    notes: [
      "Thursday crew (Lion, Andrey, Artem, Rustem, Rashid): you get a small generator. Talk to Cameron or Dmitriy before you travel.",
      "Group language is English. Some crew only speaks English.",
      "12 SAPs (Setup Access Passes) this year, so some crew comes later. We still need one more SAP. Ask your previous camps or build crews if they have a spare for Sphere Vision.",
      "Artem is arranging truck insurance details with Drey and Rashid."
    ]
  }
};

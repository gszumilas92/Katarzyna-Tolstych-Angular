String(
    trigger("componentState", [
        state("visible", style({
            opacity: 1
        })),
    state("hidden", style({
      opacity: 0
    })),
    transition("hidden => visible", animate(500))
  ])
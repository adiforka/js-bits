// classes
enum BirdType {
  Eagle = "eagle",
  Emu = "emu"
}

interface BirdProps {
  species: string
}

class Bird {
  species: string
  constructor({ species }: BirdProps) {
    this.species = species
  }
}

interface EagleProps extends BirdProps {
  flightRange: number
}

class Eagle extends Bird {
  flightRange: number

  constructor({ species, flightRange }: EagleProps) {
    super({ species })
    this.flightRange = flightRange
  }
}

interface EmuProps extends BirdProps {
  runningSpeed: number
}

class Emu extends Bird {
  runningSpeed: number

  constructor({ species, runningSpeed }: EmuProps) {
    super({ species })
    this.runningSpeed = runningSpeed
  }
}

// making sure this will not be instantiated
abstract class BirdFactory {
  // and here's the overloading to make sure we get the right combinations of args,
  // that is, that if the type is Eagle, we require an instrument and
  // if the type is Coding, we require a programming language
  static getBird(type: BirdType.Emu, props: EmuProps): Emu
  static getBird(type: BirdType.Eagle, prop: EagleProps): Eagle
  static getBird(type: unknown, props: any) {
    switch (type) {
      case BirdType.Eagle: {
        return new Eagle(props)
      }
      case BirdType.Emu: {
        return new Emu(props)
      }
      default:
        throw new Error("No such type for teacher")
    }
  }
}

let eagle = BirdFactory.getBird(BirdType.Eagle, {
  species: "White Eagle",
  // let's say this is in miles
  flightRange: 200
})

let emu = BirdFactory.getBird(BirdType.Emu, {
  species: "Gray Emu",
  runningSpeed: 35
})

console.log(eagle)
console.log(emu)

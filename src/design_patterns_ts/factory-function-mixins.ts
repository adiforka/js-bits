// mixin factory function
type Fullname = { fn: string; ln: string }
function withNames({ fn, ln }: Fullname) {
  return {
    fn,
    ln
  }
}

type WriterProps = Fullname & { genres: string[] }
const createWriter = ({ fn, ln, genres = [] }: WriterProps) => ({
  // using the mixin
  ...withNames({ fn, ln }),
  genres
})

type NurseProps = Fullname & { patients: string[] }
const createNurse = ({ fn, ln, patients = [] }: NurseProps) => ({
  // using the mixin
  ...withNames({ fn, ln }),
  patients
})

// idiom simulating Python's named arguments in JS/TS
const writer = createWriter({
  fn: "Jackson",
  ln: "Pollock",
  genres: ["Science Fiction", "Philosophy"]
})

const nurse = createNurse({
  fn: "Gardenia",
  ln: "Dickinson",
  patients: ["Dickery Duckens", "Milosh Forman"]
})

console.log(writer)
console.log(nurse)

/* 
/null + 1 === 1/ but /undefined - 1 GIVES NAN/
null == 0 // cannot coerce null to a number (only to null / undefined)
NaN == NaN ===  false


[] && {} && "the truth!"
true && {}
[] && 234

object coerion: valueOf will be called first on an object unless it's a Date

Symbols---
Symbol(123) && 'yes' coerced to booleans ok (always to true, so all symbols are truthy)
Symbol(234) + 'yes' not coercable to string (TypeError)
+Symbol(234) not coercable to number (TypeError)

*/
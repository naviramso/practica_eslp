let divideSafe dividend divisorFunc =
    if  divisorFunc <> 0 then
        dividend / divisorFunc
    else
        0

let divisor = lazy (1 / 0)  // Lazy computation of the divisor: 1 divided by 0

let result = divideSafe 10 divisor.Value  // Function call with lazy evaluation

printfn "The result of the division is: %d" result

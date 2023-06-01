let divideSafe dividend divisorFunc =
    if Lazy divisorFunc <> 0 then
        dividend / Lazy divisorFunc
    else
        0

let divisor = lazy (2 + 2 / 2)  

let result = divideSafe 10 divisor.Value  

printfn "The result of the division is: %d" result

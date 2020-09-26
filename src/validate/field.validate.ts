/* Problem: Parsing commandline output by spaces only leaves a lot of room
   for error. If you're parsing columns by spaces, then any space in a filename
   can offset the entire reading process. These field validators are for fixing
   that problem, though there are always other benefits to validating fields,
   like type-safety and prevention of run-time errors. If you're expecting
   a field to have numbers and it has none, then it's safe to assume something
   went wrong with the parsing process (or the command itself) and you can go
   from there, knowing for sure that your columns are messed up.
*/

export abstract class FieldValidator {
  
}

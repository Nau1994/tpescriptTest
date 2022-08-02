type isNumber<T>=
T extends number
? 'number'
: 'other';

type withNumber=isNumber<number>;
type withoutNumber=isNumber<string>;

type TypeName<T>=
T extends number ? 'number' :
T extends string ? 'string' :
T extends boolean ? 'boolean' :
'other';

function typeName<T>(t:T):TypeName<T>{
  return typeof t as TypeName<T>;
}

const str=typeName('naushad');
const num=typeName(28);
const bool=typeName(true);
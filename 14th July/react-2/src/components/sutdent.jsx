
export default function Student({name, age, class: studentClass}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Class: {studentClass}</p>
      <p>{age>=18?'Adult':'minor'}</p>
    </div>
  );
}
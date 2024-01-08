export default function Person({firstName, lastName}:Person) {
    return(
        <div className={`p-24 bg-midnight text-tahiti`}>
            My name is: {firstName} {lastName}
        </div>
    )
}
let fio = {
    name: 'Alex',
    lastname: 'Smith'
};

fio.name = 'Bob'

delete(fio.name)
delete(fio.lastname)

console.log(fio)
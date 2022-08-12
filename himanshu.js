fetch(
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11"
  )
    .then((res) => res.json())
    .then(function (datas) {
      for (var i in datas) {
        var row = `
          <tr>
            <td>${datas[i].id}</td>
            <td>${datas[i].name}</td>
            <td>${datas[i].username}</td>
            <td>${datas[i].email}</td>
            <td>${datas[i].address}</td>
            <td>${datas[i].street}</td>
            <td>${datas[i].suite}</td>
            <td>${datas[i].city}</td>
            <td>${datas[i].zipcode}</td>
            <td>${datas[i].geo}</td>
            <td>${datas[i].lat}</td>
            <td>${datas[i].lng}</td>
          </tr>1
  `;
        var table = $("#table-body");
        table.append(row);
      }
    });
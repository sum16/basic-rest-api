// usersリソースのAPIを実行

//即時関数でモジュール化
const usersModule = () => {
  const BASE_URL = "http://localhost:3000/api/v1/users";

  return {
    feachAllUsers = async() => {
      // 非同期処理は実行結果が返るのを待たずに次の処理にいってしまうため、async awaitを使用する
      const res = await fetch(BASE_URL)
      const users = await res.json()

      for (let i =0; i < users.lenght; i++) {
        const user = users[i]
        const body = `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.profile}</td>
          <td>${user.date_of_birth}</td>
          <td>${user.created_at}</td>
          <td>${user.updated_at}</td>
        </tr>
        `
        document.getElementById('users-list').insertAdjacentElement("beforeend", body)
      }

    }
  }
};

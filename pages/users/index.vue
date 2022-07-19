<template>
  <div>
    <h2>Users</h2>
    <table id="table-users" v-if="users.length > 0">
      <thead>
      <tr>
        <th>#</th>
        <th>User</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody id="body-users">
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  async beforeMount() {
    try {
      const { data } = await this.$axios.get("/api/normal-test");
      // eslint-disable-next-line no-console
      console.log(data.data);
      this.users = data.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('From vue',e);
    }
  }
};
</script>

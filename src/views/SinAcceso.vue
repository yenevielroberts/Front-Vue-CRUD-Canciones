<script setup>
</script>

<template>
  <div class="container">
    <div class="state error">
      <h1>Acceso denegado</h1>
      <p>Error: Sin permiso</p>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: min(900px, 92vw);
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border-radius: 18px;
  margin: 40px auto 0;
  padding: 24px;
  background: rgba(12, 15, 20, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  gap: 18px;
}

.state{
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.state.error{
  background: rgba(220, 38, 38, 0.12);
  border-color: rgba(220, 38, 38, 0.35);
}

.state h1{
  margin: 0;
  font-size: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.9;
}

.state p{
  margin: 0;
  opacity: 0.85;
}
</style>
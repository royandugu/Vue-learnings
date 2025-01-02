<template>
    <header class="header">
        <div class="container">
            <div class="header-flex">
                <div class="logo-wrapper">
                    <h2> Logo </h2>
                </div>
                <ul class="nav-wrapper">
                    <li> <a href="/"> Home </a></li>
                    <li> <a href="/about"> About </a></li>
                    <li> <a href="/about"> Projects </a></li>
                    <li> <a href="/about"> Experience </a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style>
header.header .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header.header .nav-wrapper {
    display: flex;
    gap: 10px;
}

</style>
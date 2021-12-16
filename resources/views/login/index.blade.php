<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/style.css?v=1.13')}}">
    <script src="https://kit.fontawesome.com/8d4425b4c8.js" crossorigin="anonymous"></script>
    <title>Inicio de sesion</title>
</head>
<body>
    <div class="container-main">
        <header>
            <nav class="navbar">
                <li class="list-item">
                    <h1> <i class="fas fa-birthday-cake home"></i></h1>
                </li>
            </nav>
        </header>
        <h2 class="title-section">Iniciar sesión</h2>
        <form action="#" class="form form-login">
            <div class="form-group">
                <label for="email"><i class="fas fa-at icon-form"></i>Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="alguien@example.com">
            </div>
            <div class="form-group">
                <label for="password"><i class="fas fa-key icon-form"></i>Contraseña</label>
                <input type="password" name="password" id="password" class="form-control">
            </div>
            <div class="container-btn">
                <button type="submit" class="btn btn-primary btn-login" id="btn_submit">Ingresar<i class="fas fa-arrow-circle-right"></i></button>
            </div>
            <div class="form-group">
                <small>¿Aún no tienes una cuenta? <a href="#" class="account">Regístrate aquí</a></small>
            </div>
            <div class="container-social">
                <hr>
                <p class="text-center">o</p>
                <a href="{{url('login/facebook')}}" class="btn btn-social btn-facebook"><i class="fab fa-facebook"></i>Iniciar sesión con Facebook</a>
                <a href="{{url('login/google')}}" class="btn btn-social btn-google"><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google"> Iniciar sesión con Google</a>
            </div>
        </form>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>

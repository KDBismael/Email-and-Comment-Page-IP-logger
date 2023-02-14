<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="../assets/Logo connection.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/main.css">
    <title>Leave a comment</title>
</head>
<body>
    <main>
        <div class="content">
            <h1>Comment</h1>
            <p>Give us a comment</p>
            <div class="comment">
                <input type="email" value="" name="email" id="email" placeholder="Email">
                <textarea value="" placeholder="Your comment..." name="comment" id="comment" rows="1"></textarea>
                <button class="btn">Send</button>
            </div>
        </div>

    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ipaddr.js/2.0.1/ipaddr.min.js" ></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/userinfo/1.1.0/userinfo.min.js"></script>
    <script type='text/javascript' src="//wurfl.io/wurfl.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <?php include 'php/store.php'; ?>
    <script src="./js/main.js"></script>
</body>
</html>
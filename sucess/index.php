<?php
error_reporting(0);
// Function to get the client IP address
function get_client_ip()
{
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if (getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if (getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if (getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if (getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if (getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

if (isset($_POST['submit']) and !empty($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $esource = $_POST['esource'];
    $emedium = $_POST['emedium'];
    $utmid = $_POST['utmid'];
    $ip = get_client_ip();

    $mail1_subject = "Speakeazy Academy Enquiry from Google Ads, " . $name;
    $mail1_txt = "Name :" . $name . "<br>" . "Mobile :" . $phone . "<br>" . "E-Mail :" . $email . "<br>" . "Source :" . $esource . "<br>" . "Medium :" . $emedium . "<br>" . "IP :" . $ip . "<br>";


    // leadfox webhook start here

    //$description = "Company Name: " . $companyname . "Enquiry: " . $enquiry;


    $utm_source = $esource;

    //echo $utm_source;

    if (empty($utmid)) {
        $utm_id = "7050684647";
    } else {
        $utm_id = $utmid;
    }



    $apiKey = urlencode('yJm0VYWoh3TlcTbD');
    //$agent = "49806091";
    $agentgroup = "67388350";

    $data = array(
        'apikey' => $apiKey,
        'name' => $name,
        "phone" => $phone,
        "email" => $email,
        "utm_source" => $utm_source,
        "utm_medium" => $emedium,
        "description" => $description,
        "utm_id" => $utm_id,
        //"agent" => $agent,
        "agent_group" => $agentgroup,
        "ip_address" => $ip

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here



    // More headers
    $headers .= 'From: <noreply@speakeazyacademy.com>' . "\r\n";

    $to = "viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, leads.viralmafia@gmail.com";
    $url = 'http://viralmafia.com/demo/jsonmailerspeakeazy.php';
    $ch = curl_init($url);
    $data = array(
        'to' => $to,
        'subject' => $mail1_subject,
        'messagenew' => $mail1_txt,
        'headers' => $headers,
    );
    $payload = json_encode($data);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $complete = curl_exec($ch);
    curl_close($ch);

    if ($complete) {

?>
        <!doctype html>
        <html>

        <head>
            <meta charset="utf-8">
            <title>THANK YOU</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="css/custom.css" type="text/css">
            <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
            <link rel="stylesheet" href="css/font-awesome.css" type="text/css">
            <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon.png">

            <!-- Google Tag Manager -->
            <script>
                (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-MQNL67F');
            </script>
            <!-- End Google Tag Manager -->


        </head>

        <body>

            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQNL67F" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->

            <section>
                <div class="main_body">
                    <div class="pop_outer">
                        <div class="pop_colour_bg">
                            <div class="pop_whte_bg">
                                <div class="logo_sec">
                                    <img src="images/logo.svg">
                                </div>
                                <div class="thank_you">
                                    <h1>Thank You!</h1>
                                    <div class="check_icon">
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <div class="short_cont">
                                        <p>Hi <?php echo $name; ?>! Thanks for reaching out! We're thrilled to hear from you. We'll get back in touch with you via <?php echo $email; ?> or via phone <?php echo $phone; ?>. <br> Have a great day!</p>

                                        <p><i class="fa fa-phone" aria-hidden="true"></i> +91 96457 22100 </p>
                                    </div>

                                    <div class="back_btn"><a href="../index.php">back to home</a></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="js/bootstrap.min.js" type="text/javascript"></script>

        </body>

        </html>

<?php
    } else {
        header("location:../index.php");
    }
} else {
    header("location:../index.php");
}
?>
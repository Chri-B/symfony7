<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DevController
{
    #[Route('/dev', name: 'app_dev')]
    public function dev(): Response
    {
        return new Response(
            '<html><body>Hello World!</body></html>'
        );
    }
}
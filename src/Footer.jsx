const Footer = () => {

    return (
        <div class="container mx-auto">
        <footer class="flex flex-wrap flex-col items-center px-4 py-6 text-sm text-gray-700 border-t">
            <div class="text-center">© 2022  <a href="https://shuffle.dev/" class="text-gray-700 hover:underline" title="An online editor for busy developers" target="_blank">Shuffle</a></div>
            <div class="mx-auto mb-3 text-center">
                <a href="https://tailwind.build/tailwind/static/files/terms-of-use.pdf" target="_blank" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Terms</a>
                <a href="https://tailwind.build/tailwind/static/files/privacy-policy.pdf" target="_blank" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Privacy Policy</a>
                <a href="https://tailwind.build/licenses" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Licenses</a>
                <a href="mailto:support@shuffle.dev" target="_blank" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Support</a>
                <a href="https://shuffle.dev/components/tailwind" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Components</a>
                <a href="https://shuffle.dev/tailwind/templates" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Templates</a>
                <a href="https://tailwind.build/classes" class="inline-block mt-4 mx-3 text-blue-700 hover:underline">Tailwind CSS</a>
            </div>
            <p class="w-full mt-2 mb-2 text-center text-gray-700">Tailwind Builder is a product of <a href="https://shuffle.dev/">Shuffle</a> and is not affiliated with Tailwind CSS or Tailwind Labs.</p>
            <p class="w-full mt-2 mb-2 text-center"><a href="https://shuffle.dev/tailwind" class="text-blue-600 hover:underline">Switch to the Tailwind Editor by Shuffle<sup> <i class="icon-link-ext"></i></sup></a></p>
        </footer>
    </div>
    )
}

export default  Footer;
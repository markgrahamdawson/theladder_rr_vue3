<template>
    <div class="w-full h-96 md:bg-[url('~/assets/mailing.png')] md:bg-no-repeat md:bg-cover md:bg-center  sm:bg-orange flex items-center justify-center space-y-6">
        <div>
            <div class="text-white text-center font-semibold space-y-5">
                <div class="text-3xl">
                    JOIN OUR MAILING LIST
                </div>
                <div>
                    Newsletter, Events, Updates, hear about everything on our mailing list!
                </div>
            </div>

            <div class="w-full grid grid-cols-[10fr_5fr] gap-2 mt-5">
                <div class="mx-2">
                    <input class="px-2 py-2 w-full rounded-md" id="email" type="text" placeholder="youremail@email.com">
                </div>
                <div>
                    <button type="button" class="bg-teal text-white font-semibold rounded-md px-2 py-2 w-full">
                    JOIN NOW
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tags')->insert([
            [
                'name' => 'Laravel',
                'created_at' => new DateTime(),
            ],
            [
                'name' => 'PHP',
                'created_at' => new DateTime(),
            ],
            [
                'name' => 'JavaScript',
                'created_at' => new DateTime(),
            ],
            [
                'name' => 'React',
                'created_at' => new DateTime(),
            ],
        ]);
    }
}

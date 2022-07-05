<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('posts')->insert([
            [
                'title' => 'test title1',
                'content' => 'test content1',
                'created_at' => new DateTime(),
            ],
            [
                'title' => 'test title2',
                'content' => 'test content2',
                'created_at' => new DateTime(),
            ],
            [
                'title' => 'test title3',
                'content' => 'test content3',
                'created_at' => new DateTime(),
            ],
        ]);
    }
}

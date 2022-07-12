<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'title',
        'content',
    ];

    public function tags() {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }

    // public function getTagData($tag_name) {
    //     // タグが存在する場合は、tag_idを渡す。存在しない場合は、作成する。
    //     $tag = Tag::firstOrCreate([
    //         'name' => $tag_name,
    //     ]);
    //     return $tag;
    // }
}

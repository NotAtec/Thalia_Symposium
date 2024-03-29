# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_12_133159) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "lectures", force: :cascade do |t|
    t.string "title"
    t.text "abstract"
    t.bigint "speaker_id", null: false
    t.integer "max"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["speaker_id"], name: "index_lectures_on_speaker_id"
  end

  create_table "slots", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "lecture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lecture_id"], name: "index_slots_on_lecture_id"
    t.index ["user_id"], name: "index_slots_on_user_id"
  end

  create_table "speakers", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "body"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "talk_id"
    t.string "image"
    t.index ["slug"], name: "index_speakers_on_slug", unique: true
    t.index ["talk_id"], name: "index_speakers_on_talk_id"
  end

  create_table "sponsors", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.string "link"
    t.index ["slug"], name: "index_sponsors_on_slug", unique: true
  end

  create_table "talks", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.integer "slots"
    t.integer "hall"
    t.string "slug"
    t.bigint "speaker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["speaker_id"], name: "index_talks_on_speaker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstname"
    t.string "lastname"
    t.string "first_name"
    t.string "last_name"
    t.string "diet"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "lectures", "speakers"
  add_foreign_key "slots", "lectures"
  add_foreign_key "slots", "users"
  add_foreign_key "speakers", "talks"
  add_foreign_key "talks", "speakers"
end

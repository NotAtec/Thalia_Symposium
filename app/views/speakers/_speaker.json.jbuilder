json.extract! speaker, :id, :name, :title, :body, :slug, :image, :created_at, :updated_at
json.url speaker_url(speaker, format: :json)

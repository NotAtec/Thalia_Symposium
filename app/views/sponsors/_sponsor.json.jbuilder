json.extract! sponsor, :id, :title, :body, :slug, :image, :link, :created_at, :updated_at
json.url sponsor_url(sponsor, format: :json)

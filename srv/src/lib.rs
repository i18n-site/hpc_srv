use aok::Void;
use axum::{Router, body::Bytes, http::HeaderMap, response::Response, routing::put};

mod _hpc;

const BATCH_LIMIT: usize = 64;

#[axum::debug_handler]
pub async fn hpc(headers: HeaderMap, body: Bytes) -> Response {
  hpc::run::<_hpc::Hpc, BATCH_LIMIT>(headers, body).await
}

genv::def!(PORT:u16 | 2025);

pub async fn srv() -> Void {
  let port = PORT();
  let router = Router::new();
  let router = axum_layer::layer(router.route("/", put(hpc)));
  hpc::srv(port, router).await
}

export const codeExamples = {
  get: {
    javascript: {
      code: `fetch("https://aj-linkshrink.onrender.com/api/get/link", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    link_id: "link-id",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
`,
    },
    python: {
      code: `import requests
import json

url = "https://aj-linkshrink.onrender.com/api/get/link"
headers = {"Content-Type": "application/json"}
data = {"link_id": "link-id"}

try:
    response = requests.get(url, headers=headers, json=data)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.RequestException as error:
    print(f"Error: {error}")
`,
    },
    java: {
      code: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class GetRequest {
  public static void main(String[] args) {
    try {
      URL url = new URL("https://aj-linkshrink.onrender.com/api/get/link?link_id=link-id");
      HttpURLConnection con = (HttpURLConnection) url.openConnection();
      con.setRequestMethod("GET");
      con.setRequestProperty("Content-Type", "application/json");

      int responseCode = con.getResponseCode();
      System.out.println("Response Code: " + responseCode);

      BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
      String inputLine;
      StringBuffer response = new StringBuffer();

      while ((inputLine = in.readLine()) != null) {
        response.append(inputLine);
      }
      in.close();
      System.out.println("Response: " + response.toString());
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`,
    },
    php: {
      code: `<?php
$url = "https://aj-linkshrink.onrender.com/api/get/link";
$data = ["link_id" => "link-id"];

$options = [
    "http" => [
        "header" => "Content-type: application/json\r",
        "method" => "GET",
        "content" => json_encode($data),
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);
if ($response === false) {
    echo "Error";
} else {
    echo $response;
}
?>
`,
    },
    ruby: {
      code: `require 'net/http'
require 'json'
require 'uri'

uri = URI('https://aj-linkshrink.onrender.com/api/get/link')
params = {
  link_id: 'link-id'
}
uri.query = URI.encode_www_form(params)

response = Net::HTTP.get(uri)
puts response`,
    },
    go: {
      code: `package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "io/ioutil"
  "net/http"
)

func main() {
  url := "https://aj-linkshrink.onrender.com/api/get/link"
  data := map[string]string{"link_id": "link-id"}

  jsonData, err := json.Marshal(data)
  if err != nil {
    fmt.Println("Error marshaling JSON:", err)
    return
  }

  req, err := http.NewRequest("GET", url, bytes.NewBuffer(jsonData))
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Set("Content-Type", "application/json")
  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error sending request:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    },
  },
  post: {
    javascript: {
      code: `fetch("https://aj-linkshrink.onrender.com/api/post/link", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    link_id: "link-id",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
`,
    },
    python: {
      code: `import requests
import json

url = "https://aj-linkshrink.onrender.com/api/post/link"
headers = {"Content-Type": "application/json"}
data = {"link_id": "link-id"}

try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.RequestException as error:
    print(f"Error: {error}")
`,
    },
    java: {
      code: `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class PostRequest {
  public static void main(String[] args) {
    try {
      URL url = new URL("https://aj-linkshrink.onrender.com/api/post/link");
      HttpURLConnection con = (HttpURLConnection) url.openConnection();
      con.setRequestMethod("POST");
      con.setRequestProperty("Content-Type", "application/json");

      String jsonInputString = "{\"link_id\": \"link-id\"}";

      con.setDoOutput(true);
      try (OutputStream os = con.getOutputStream()) {
        byte[] input = jsonInputString.getBytes("utf-8");
        os.write(input, 0, input.length);
      }

      int responseCode = con.getResponseCode();
      System.out.println("Response Code: " + responseCode);

      BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
      String inputLine;
      StringBuffer response = new StringBuffer();

      while ((inputLine = in.readLine()) != null) {
        response.append(inputLine);
      }
      in.close();
      System.out.println("Response: " + response.toString());
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`,
    },
    php: {
      code: `<?php
$url = "https://aj-linkshrink.onrender.com/api/post/link";
$data = ["link_id" => "link-id"];

$options = [
    "http" => [
        "header" => "Content-type: application/json\r",
        "method" => "POST",
        "content" => json_encode($data),
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);
if ($response === false) {
    echo "Error";
} else {
    echo $response;
}
?>
`,
    },
    ruby: {
      code: `require 'net/http'
require 'json'
require 'uri'

uri = URI('https://aj-linkshrink.onrender.com/api/post/link')
data = {
  link_id: 'link-id'
}

response = Net::HTTP.post(uri, data.to_json, {
  "Content-Type" => "application/json"
})
puts response.body`,
    },
    go: {
      code: `package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "io/ioutil"
  "net/http"
)

func main() {
  url := "https://aj-linkshrink.onrender.com/api/post/link"
  data := map[string]string{"link_id": "link-id"}

  jsonData, err := json.Marshal(data)
  if err != nil {
    fmt.Println("Error marshaling JSON:", err)
    return
  }

  req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Set("Content-Type", "application/json")
  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error sending request:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    },
  },
}

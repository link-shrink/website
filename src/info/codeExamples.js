export const codeExamples = {
  get: {
    javascript: {
      code: `fetch("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
`,
    },
    python: {
      code: `import requests

url = "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}"
headers = {"Content-Type": "application/json"}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.RequestException as error:
    print(f"Error: {error}")
`,
    },
    java: {
      code: `import java.net.*;
import java.io.*;
import java.util.Scanner;

public class FetchExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-Type", "application/json");

            int responseCode = conn.getResponseCode();
            if (responseCode == 200) {
                Scanner scanner = new Scanner(conn.getInputStream());
                StringBuilder response = new StringBuilder();
                while (scanner.hasNext()) {
                    response.append(scanner.nextLine());
                }
                scanner.close();
                System.out.println(response.toString());
            } else {
                System.out.println("Error: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`,
    },
    php: {
      code: `<?php

$url = "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}";

$options = [
    "http" => [
        "method" => "GET",
        "header" => "Content-Type: application/json\r\n",
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error: Unable to fetch data";
} else {
    echo $response;
}
?>
`,
    },
    ruby: {
      code: `require 'net/http'
require 'uri'
require 'json'

uri = URI("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}")
request = Net::HTTP::Get.new(uri)
request["Content-Type"] = "application/json"

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

if response.is_a?(Net::HTTPSuccess)
  data = JSON.parse(response.body)
  puts data
else
  puts "Error: #{response.message}"
end
`,
    },
    go: {
      code: `package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    url := "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/{link_id}"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    var data map[string]interface{}
    if err := json.Unmarshal(body, &data); err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println(data)
}
`,
    },
  },
  post: {
    javascript: {
      code: `fetch("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    link: "original-link",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
`,
    },
    python: {
      code: `import requests

url = "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create"
data = {"link": "original-link"}
headers = {"Content-Type": "application/json"}

try:
    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status()
    result = response.json()
    print(result)
except requests.exceptions.RequestException as error:
    print(f"Error: {error}")
`,
    },
    java: {
      code: `import java.net.*;
import java.io.*;

public class PostExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            String jsonInputString = "{\"link\":\"original-link\"}";
            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));
                StringBuilder response = new StringBuilder();
                String responseLine;
                while ((responseLine = br.readLine()) != null) {
                    response.append(responseLine.trim());
                }
                System.out.println(response.toString());
            } else {
                System.out.println("Error: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`,
    },
    php: {
      code: `<?php

$url = "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create";
$data = ["link" => "original-link"];
$options = [
    "http" => [
        "method" => "POST",
        "header" => "Content-Type: application/json\r\n",
        "content" => json_encode($data),
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error: Unable to send data";
} else {
    echo $response;
}
?>
`,
    },
    ruby: {
      code: `require 'net/http'
require 'uri'
require 'json'

uri = URI("https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create")
request = Net::HTTP::Post.new(uri)
request["Content-Type"] = "application/json"
request.body = { link: "original-link" }.to_json

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

if response.is_a?(Net::HTTPSuccess)
  data = JSON.parse(response.body)
  puts data
else
  puts "Error: #{response.message}"
end
`,
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
	url := "https://l-cutt-ggdpg0bhgwhcd4cs.northcentralus-01.azurewebsites.net/link/create"
	payload := map[string]string{"link": "original-link"}
	jsonData, err := json.Marshal(payload)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(string(body))
}
`,
    },
  },
}

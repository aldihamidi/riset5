<?php

namespace Config;

class Validation
{
	//--------------------------------------------------------------------
	// Setup
	//--------------------------------------------------------------------

	/**
	 * Stores the classes that contain the
	 * rules that are available.
	 *
	 * @var array
	 */
	public $ruleSets = [
		\CodeIgniter\Validation\Rules::class,
		\CodeIgniter\Validation\FormatRules::class,
		\CodeIgniter\Validation\FileRules::class,
		\CodeIgniter\Validation\CreditCardRules::class,
		\Myth\Auth\Authentication\Passwords\ValidationRules::class,
	];

	/**
	 * Specifies the views that are used to display the
	 * errors.
	 *
	 * @var array
	 */
	public $templates = [
		'list'   => 'CodeIgniter\Validation\Views\list',
		'single' => 'CodeIgniter\Validation\Views\single',
	];

	//--------------------------------------------------------------------
	// Rules
	//--------------------------------------------------------------------

	public $insertResource = [
		'menu' => 'required',
		'title' => 'required',
		'url' => 'required',
		'icon' => 'required',
		'active' => 'required',
	];

	public $insertResource_errors  = [
		'menu' => [
			'required'      => 'Menu is required',
		],
		'title' => [
			'required'      => 'Title is required',
		],
		'url' => [
			'required'      => 'URL must be filled',
		],
		'icon' => [
			'required'      => 'Icon must be filled',
		],
		'active' => [
			'required'      => 'Resources active status must be filled',
		]
	];

	public $insertMenu = [
		'menu' => 'required',
		'icon' => 'required',
	];

	public $updateMenu = [
		'id' => 'required|numeric',
		'menu' => 'required',
		'icon' => 'required',
	];

	public $insertMenu_errors  = [
		'id' => [
			'required'      => 'Menu id is required',
			'numeric'      => 'Menu id can only be filled with numeric',
		],
		'menu' => [
			'required'      => 'Menu name is required',
		],
		'icon' => [
			'required'      => 'Icon must be filled',
		]
	];
}
